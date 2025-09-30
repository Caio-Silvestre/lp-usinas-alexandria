"use client";

import * as React from "react";
import { z } from "zod";
import { useForm, type Resolver } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/Button";
import { FormProvider, Controller, FormField } from "@/components/ui/form";
import { ErrorMessage } from "@/components/ui/ErrorMessage";
import { SuccessMessage } from "@/components/ui/SuccessMessage";
import { toast } from "sonner";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/utils";

const schema = z.object({
  role: z.string().min(1, "Campo obrigatório"),
  fullName: z.string().min(3, "Informe pelo menos 3 caracteres"),
  phone: z
    .string()
    .regex(/\(\d{2}\)\s?\d{5}-\d{4}/, "Use o formato (00) 00000-0000"),
  email: z.string().email("E-mail inválido"),
  energyType: z.string().min(1, "Campo obrigatório"),
  plantPower: z.coerce.number().min(1, "Informe um valor maior que 0"),
  state: z.string().length(2, "Selecione a UF"),
  city: z.string().min(1, "Campo obrigatório"),
});

type FormInput = z.input<typeof schema>; // valores antes da coerção
type FormOutput = z.output<typeof schema>; // valores após a coerção

const states = [
  { nome: "Acre", uf: "AC" },
  { nome: "Alagoas", uf: "AL" },
  { nome: "Amapá", uf: "AP" },
  { nome: "Amazonas", uf: "AM" },
  { nome: "Bahia", uf: "BA" },
  { nome: "Ceará", uf: "CE" },
  { nome: "Distrito Federal", uf: "DF" },
  { nome: "Espírito Santo", uf: "ES" },
  { nome: "Goiás", uf: "GO" },
  { nome: "Maranhão", uf: "MA" },
  { nome: "Mato Grosso", uf: "MT" },
  { nome: "Mato Grosso do Sul", uf: "MS" },
  { nome: "Minas Gerais", uf: "MG" },
  { nome: "Pará", uf: "PA" },
  { nome: "Paraíba", uf: "PB" },
  { nome: "Paraná", uf: "PR" },
  { nome: "Pernambuco", uf: "PE" },
  { nome: "Piauí", uf: "PI" },
  { nome: "Rio de Janeiro", uf: "RJ" },
  { nome: "Rio Grande do Norte", uf: "RN" },
  { nome: "Rio Grande do Sul", uf: "RS" },
  { nome: "Rondônia", uf: "RO" },
  { nome: "Roraima", uf: "RR" },
  { nome: "Santa Catarina", uf: "SC" },
  { nome: "São Paulo", uf: "SP" },
  { nome: "Sergipe", uf: "SE" },
  { nome: "Tocantins", uf: "TO" },
];

export function PartnerFormModal({
  triggerClassName,
  triggerLabel = "Quero ser parceiro",
}: {
  triggerClassName?: string;
  triggerLabel?: string;
}) {
  const [open, setOpen] = React.useState(false);
  const [cities, setCities] = React.useState<string[]>([]);
  const [loadingCities, setLoadingCities] = React.useState(false);
  const [submitError, setSubmitError] = React.useState<string | null>(null);
  const [isSuccess, setIsSuccess] = React.useState(true);
  const [userData, setUserData] = React.useState<{
    email: string;
    phone: string;
  } | null>(null);

  const methods = useForm<FormInput, undefined, FormOutput>({
    resolver: zodResolver(schema) as Resolver<FormInput, undefined, FormOutput>,
    defaultValues: {
      role: "",
      fullName: "",
      phone: "",
      email: "",
      energyType: "",
      plantPower: 0,
      state: "",
      city: "",
    },
  });

  const stateValue = methods.watch("state");

  React.useEffect(() => {
    async function fetchCities() {
      if (!stateValue) {
        setCities([]);
        return;
      }
      try {
        setLoadingCities(true);
        const res = await fetch(
          `https://brasilapi.com.br/api/ibge/municipios/v1/${stateValue}?providers=dados-abertos-br,gov,wikipedia`
        );
        const data = await res.json();
        const names = Array.isArray(data)
          ? data.map((c: { nome: string }) => c.nome)
          : [];
        setCities(names);
      } catch {
        setCities([]);
        toast.error("Falha ao carregar cidades para a UF selecionada.");
      } finally {
        setLoadingCities(false);
      }
    }
    fetchCities();
  }, [stateValue]);

  async function onSubmit(values: FormOutput) {
    try {
      setSubmitError(null);
      // Log dos valores e URL fake para futura integração
      const FAKE_UPSTREAM = "https://api.exemplo.com/partners";
      console.log("[partner:submit] payload", values);
      console.log("[partner:submit] upstream URL", FAKE_UPSTREAM);

      // placeholder para integração futura; manter fetch pronto (server route local)
      const res = await fetch("/api/partner", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err?.message || "Erro ao enviar formulário");
      }

      // Sucesso: salvar dados do usuário e mostrar tela de sucesso
      setUserData({ email: values.email, phone: values.phone });
      setIsSuccess(true);
      methods.reset();
    } catch (e: unknown) {
      const errorMessage =
        e instanceof Error ? e.message : "Erro ao enviar. Verifique os campos.";
      setSubmitError(errorMessage);
      toast.error(errorMessage);
    }
  }

  // máscara simples de telefone (00) 00000-0000
  function handlePhoneMask(e: React.ChangeEvent<HTMLInputElement>) {
    let v = e.target.value.replace(/\D/g, "");
    v = v.slice(0, 11);
    if (v.length > 6) v = v.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
    else if (v.length > 2) v = v.replace(/(\d{2})(\d{0,5})/, "($1) $2");
    else v = v.replace(/(\d{0,2})/, "($1");
    e.target.value = v;
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="primary"
          size="lg"
          className={cn(
            "z-10 flex w-full max-w-[340px] rounded-[8px] px-4 py-3 justify-center items-center gap-2 ",
            triggerClassName
          )}
        >
          {triggerLabel} <ArrowRightIcon size={24} />
        </Button>
      </DialogTrigger>
      <DialogContent className="p-6 w-90 h-fit max-h-[90vh] my-5 overflow-y-auto z-100">
        {isSuccess ? (
          <SuccessMessage
            userEmail={userData?.email || undefined}
            userPhone={userData?.phone || undefined}
            onClose={() => {
              setOpen(false);
              setIsSuccess(false);
              setUserData(null);
            }}
          />
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Quero ser parceiro</DialogTitle>
            </DialogHeader>

            {submitError && (
              <ErrorMessage
                title="Erro ao enviar as informações"
                message={submitError}
                className="mb-4"
              />
            )}

            <FormProvider {...methods}>
              <form
                className="space-y-4"
                onSubmit={methods.handleSubmit(onSubmit)}
              >
                <div>
                  <h3 className="text-sm font-semibold text-[#1A1A1A]">
                    Informações para contato
                  </h3>
                </div>

                <FormField name="role">
                  <Label htmlFor="role">Você é:</Label>
                  <Controller
                    name="role"
                    control={methods.control}
                    render={({ field }) => (
                      <Select id="role" {...field}>
                        <option value="">Selecione</option>
                        <option value="proprietario">Proprietário</option>
                        <option value="integrador">Integrador</option>
                        <option value="representante">Representante</option>
                        <option value="diretoria">Diretoria</option>
                      </Select>
                    )}
                  />
                </FormField>

                <div className="grid grid-cols-1 gap-4">
                  <FormField name="fullName">
                    <Label htmlFor="fullName">Nome completo</Label>
                    <Input id="fullName" {...methods.register("fullName")} />
                  </FormField>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <FormField name="phone">
                    <Label htmlFor="phone">Número de celular</Label>
                    <Input
                      id="phone"
                      inputMode="numeric"
                      {...methods.register("phone", {
                        onChange: handlePhoneMask,
                      })}
                    />
                  </FormField>
                  <FormField name="email">
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                      id="email"
                      type="email"
                      {...methods.register("email")}
                    />
                  </FormField>
                  <div />
                </div>

                <div className="pt-2">
                  <h3 className="text-sm font-semibold text-[#1A1A1A]">
                    Informações complementares
                  </h3>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <FormField name="energyType">
                    <Label htmlFor="energyType">Tipo de energia</Label>
                    <Controller
                      name="energyType"
                      control={methods.control}
                      render={({ field }) => (
                        <Select id="energyType" {...field}>
                          <option value="">Selecione</option>
                          <option value="renovavel">
                            Energia de fonte renovável
                          </option>
                          <option value="convencional">
                            Energia convencional
                          </option>
                        </Select>
                      )}
                    />
                  </FormField>

                  <FormField name="plantPower">
                    <Label htmlFor="plantPower">Potência da usina</Label>
                    <Input
                      id="plantPower"
                      type="number"
                      min="1"
                      placeholder="kW"
                      inputMode="numeric"
                      {...methods.register("plantPower", {
                        valueAsNumber: true,
                      })}
                    />
                    <p className="text-xs text-[#333333] mt-1">
                      *Campo obrigatório
                    </p>
                  </FormField>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <FormField name="state">
                    <Label htmlFor="state">Estado</Label>
                    <Controller
                      name="state"
                      control={methods.control}
                      render={({ field }) => (
                        <Select id="state" {...field}>
                          <option disabled value="">
                            UF
                          </option>
                          {states.map((s) => (
                            <option key={s.uf} value={s.uf}>
                              {s.uf}
                            </option>
                          ))}
                        </Select>
                      )}
                    />
                  </FormField>

                  <FormField name="city">
                    <Label htmlFor="city">Cidade</Label>
                    <Controller
                      name="city"
                      control={methods.control}
                      render={({ field }) => (
                        <Select
                          id="city"
                          {...field}
                          disabled={
                            !stateValue || loadingCities || cities.length === 0
                          }
                        >
                          <option value="">Selecione a cidade</option>
                          {cities.map((c) => (
                            <option key={c} value={c}>
                              {c}
                            </option>
                          ))}
                        </Select>
                      )}
                    />
                  </FormField>
                </div>

                <div className="pt-2">
                  <Button type="submit" className="w-full rounded-[8px]">
                    Ser parceiro
                  </Button>
                </div>
              </form>
            </FormProvider>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
