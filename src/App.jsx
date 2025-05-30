import Header from "./components/Header";
import warfImageLight from "./assets/warf_logo_white.png";
import warfImageDark from "./assets/warf_logo_black.png";
import MessageCard from "./components/MessageCard";
import fox_card from "./assets/fox-card.jpg";
import ant_card from "./assets/ant-card.jpg";
import bear_card from "./assets/bear-card.jpg";
import jellyfish_card from "./assets/jellyfish-card.jpg";
import moth_card from "./assets/moth-card.jpg";
import squid_card from "./assets/squid-card.jpg";
import bat_card from "./assets/bat-card.jpg";
import owl_card from "./assets/owl-card.jpg";
import cow_home from "./assets/cow-home.jpg";
import cow_black_home from "./assets/cow-black-home.jpg";
import { Button } from "@/components/ui/button";
import { StatCard } from "./components/StatCard";
import { PersonStanding } from "lucide-react";
import { Rabbit } from "lucide-react";
import { Fish } from "lucide-react";
import { Leaf } from "lucide-react";
import {
  meatConsumptionData,
  populationGrowthData,
  fishConsumptionData,
  vegetableConsumptionData,
} from "./data/chartData";

import { ResponsiveContainer, LineChart, Line, Tooltip, XAxis } from "recharts";

function App() {
  // CONSUMO DE CARNE /////////////////////////////////////////////////////////////////////////////
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const carne = Math.round(
        payload.find((p) => p.dataKey === "carne")?.value ?? 0
      );
      const poblacion = Math.round(
        payload.find((p) => p.dataKey === "poblacion")?.value ?? 0
      );

      return (
        <div className="bg-neutral-800 p-3 rounded text-white text-sm">
          <p className="mb-1">{label}</p>
          <p className="text-red-500">Carne: {carne}%</p>
          <p className="text-neutral-50">Población: {poblacion}%</p>
        </div>
      );
    }

    return null;
  };

  const meatBase = meatConsumptionData[0].value;
  const populationBase = populationGrowthData[0].value;

  const combinedData = meatConsumptionData.map((item, index) => ({
    year: item.label,
    carne: ((item.value - meatBase) / meatBase) * 100,
    poblacion: populationGrowthData[index] // aseguramos alineación
      ? ((populationGrowthData[index].value - populationBase) /
          populationBase) *
        100
      : null,
  }));

  // CONSUMO DE PESCADO /////////////////////////////////////////////////////////////////////////////

  const CustomTooltipFish = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const pescado = Math.round(
        payload.find((p) => p.dataKey === "pescado")?.value ?? 0
      );
      const poblacion = Math.round(
        payload.find((p) => p.dataKey === "poblacion")?.value ?? 0
      );

      return (
        <div className="bg-neutral-800 p-3 rounded text-white text-sm">
          <p className="mb-1">{label}</p>
          <p className="text-cyan-500">Pescado: {pescado}%</p>
          <p className="text-neutral-50">Población: {poblacion}%</p>
        </div>
      );
    }

    return null;
  };

  const fishBase = fishConsumptionData[0].value;
  const combinedDataFish = fishConsumptionData.map((item, index) => ({
    year: item.label,
    pescado: ((item.value - fishBase) / fishBase) * 100,
    poblacion: populationGrowthData[index] // aseguramos alineación
      ? ((populationGrowthData[index].value - populationBase) /
          populationBase) *
        100
      : null,
  }));

  // CONSUMO DE VERDURAS /////////////////////////////////////////////////////////////////////////////

  const CustomTooltipVegetables = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const verduras = Math.round(
        payload.find((p) => p.dataKey === "verduras")?.value ?? 0
      );
      const poblacion = Math.round(
        payload.find((p) => p.dataKey === "poblacion")?.value ?? 0
      );

      return (
        <div className="bg-neutral-800 p-3 rounded text-white text-sm">
          <p className="mb-1">{label}</p>
          <p className="text-emerald-500">Verduras: {verduras}%</p>
          <p className="text-neutral-50">Población: {poblacion}%</p>
        </div>
      );
    }

    return null;
  };

  const verdurasBase = vegetableConsumptionData[0].value;
  const combinedDataVegetables = vegetableConsumptionData.map(
    (item, index) => ({
      year: item.label,
      verduras: ((item.value - verdurasBase) / verdurasBase) * 100,
      poblacion: populationGrowthData[index] // aseguramos alineación
        ? ((populationGrowthData[index].value - populationBase) /
            populationBase) *
          100
        : null,
    })
  );

  return (
    <div className="w-full min-h-screen bg-background text-foreground">
      <Header />

      <section className="mx-auto mt-10 max-w-[1200px] px-4">
        <div className="container mx-auto flex flex-col md:flex-row py-12">
          <div className="w-full flex items-center px-4 md:px-0">
            <div className="pl-4">
              <h1 className="font-cormorant text-center text-6xl md:text-6xl font-light tracking-none text-foreground">
                Creemos firmemente que la <strong>tecnología</strong> puede
                ayudarnos a construir un mundo donde humanos y animales vivan
                juntos en <strong>equilibrio</strong> y <strong>respeto</strong>
                .
              </h1>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto mt-10 max-w-[1200px] px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="flex flex-col items-center">
            <img
              src={ant_card}
              alt="ant"
              className="w-full h-auto max-h-[300px] object-contain mb-4 block dark:hidden"
            />
            <img
              src={moth_card}
              alt="moth"
              className="w-full h-auto max-h-[300px] object-contain mb-4 hidden dark:block"
            />

            <MessageCard title="Dignidad animal como principio irrenunciable.">
              <>
                En WARF creemos que{" "}
                <strong>la dignidad no es un privilegio humano</strong>, sino un
                derecho inherente a todo ser vivo. Los animales no son recursos.
                No son entretenimiento. No son objetos. Son seres con
                sensibilidad, necesidades, emociones y valor propio. Defender su
                dignidad es reconocer su existencia como legítima y valiosa.
                {/* Aquí insertas directamente el botón */}
                <div className="mt-4">
                  <Button
                    asChild
                    variant="link"
                    className="bg-black text-white dark:bg-white dark:text-black rounded-md px-6 py-3 rounded hover:opacity-90"
                  >
                    <a href="/transparencia">Conoce más</a>
                  </Button>
                </div>
              </>
            </MessageCard>
          </div>

          {/* Card 2 con imagen */}
          <div className="flex flex-col items-center">
            <img
              src={jellyfish_card}
              alt="jellyfish"
              className="w-full h-auto max-h-[300px] object-contain mb-4 block dark:hidden"
            />
            <img
              src={squid_card}
              alt="squid"
              className="w-full h-auto max-h-[300px] object-contain mb-4 hidden dark:block"
            />
            <MessageCard title="Transparencia en todo lo que hacemos.">
              <>
                En WARF entendemos que la confianza se construye con hechos
                visibles. Por eso <strong>actuamos con total claridad</strong>:
                cada decisión, cada recurso y cada acción está abierta al
                escrutinio público. No escondemos procesos ni maquillamos
                resultados. Creemos que quienes defienden vidas deben ser los
                primeros en dar ejemplo.
                <div className="mt-4">
                  <Button
                    asChild
                    variant="link"
                    className="bg-black text-white dark:bg-white dark:text-black rounded-md px-6 py-3 rounded hover:opacity-90"
                  >
                    <a href="/transparencia">Conoce más</a>
                  </Button>
                </div>
              </>
            </MessageCard>
          </div>

          {/* Card 3 con imagen (usa fox_card como ejemplo por ahora) */}
          <div className="flex flex-col items-center">
            <img
              src={bear_card}
              alt="bear"
              className="w-full h-auto max-h-[300px] object-contain mb-4 block dark:hidden"
            />
            <img
              src={bat_card}
              alt="bat"
              className="w-full h-auto max-h-[300px] object-contain mb-4 hidden dark:block"
            />

            <MessageCard title="Compromiso total con cada animal del planeta.">
              <>
                En WARF <strong>cuidamos cada vida</strong> con la atención que
                merece.
                <br />
                No jerarquizamos especies, ni restamos valor a ningún ser.
                <br />
                Cada rescate, cada campaña, cada decisión nace del respeto y del
                amor por los animales.
                <br />
                <strong>
                  Nuestro compromiso no es simbólico: es real, medible y
                  permanente
                </strong>
                .{/* Aquí insertas directamente el botón */}
                <div className="mt-4">
                  <Button
                    asChild
                    variant="link"
                    className="bg-black text-white dark:bg-white dark:text-black rounded-md px-6 py-3 rounded hover:opacity-90"
                  >
                    <a href="/transparencia">Conoce más</a>
                  </Button>
                </div>
              </>
            </MessageCard>
          </div>

          {/* Card 4 con imagen (usa ant_card como ejemplo por ahora) */}
          <div className="flex flex-col items-center">
            <img
              src={fox_card}
              alt="fox"
              className="w-full h-auto max-h-[300px] object-contain mb-4 block dark:hidden"
            />
            <img
              src={owl_card}
              alt="owl"
              className="w-full h-auto max-h-[300px] object-contain mb-4 hidden dark:block"
            />
            <MessageCard title="Compromiso en serio: acción real, sin apariencias.">
              <>
                En WARF <strong>no creemos en las apariencias</strong>. Nuestra
                energía se traduce en intervenciones, en rescates reales y en
                campañas con impacto. No buscamos likes, buscamos cambios. Nos
                mueve la urgencia, no la imagen. Cada paso que damos tiene un
                propósito claro: salvar vidas y transformar realidades con
                hechos.
                {/* Aquí insertas directamente el botón */}
                <div className="mt-4">
                  <Button
                    asChild
                    variant="link"
                    className="bg-black text-white dark:bg-white dark:text-black rounded-md px-6 py-3 rounded hover:opacity-90"
                  >
                    <a href="/transparencia">Conoce más</a>
                  </Button>
                </div>
              </>
            </MessageCard>
          </div>
        </div>
      </div>
      <section className="mx-auto mt-10 max-w-[1200px] px-4 flex flex-col items-center">
        {/* Parte superior: Imagen + Texto */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between">
          {/* Imagen a la izquierda */}
          <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
            <img
              src={cow_home}
              alt="Descripción de la imagen"
              className="max-w-[500px] object-cover dark:hidden"
            />
            <img
              src={cow_black_home}
              alt="Descripción de la imagen"
              className="max-w-[500px] object-cover hidden dark:block"
            />
          </div>

          {/* Texto a la derecha */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="max-w-md text-center">
              <h1 className="font-cormorant text-center text-5xl md:text-6xl font-light tracking-none text-foreground">
                Detengamos el abuso cárnico
              </h1>
              <p className="text-md pt-4 font-light tracking-none text-gray-300">
                <strong>Comer carne no es el problema</strong>, el abuso sí.
                Nuestro cuerpo puede beneficiarse de proteínas animales, pero en
                equilibrio. El consumo excesivo daña nuestra salud, al planeta y
                a millones de animales. Apostamos por una alimentación
                consciente, justa y sostenible, sin extremos, pero con
                responsabilidad.
              </p>
            </div>
          </div>
        </div>

        {/* Parte inferior: 3 bloques */}
        <div className="mt-10 flex flex-col md:flex-row gap-4 w-full justify-center">
          <div className="flex-1">
            <StatCard
              title="Incremento relativo 1980–2020: carne vs población"
              value={<span className="text-red-500">+152,21 %</span>}
              changeText={
                <>
                  El consumo mundial de carne aumentó un{" "}
                  <strong>152,21 %</strong> desde 1980, mientras que la
                  población creció un <strong>77,27 %</strong> en ese mismo
                  periodo.
                  <div className="pt-4 flex items-center gap-2">
                    <Rabbit className="w-6 h-6  text-red-500" /> Incremento
                    consumo de carne mundial
                  </div>
                  <div className="pt-1 flex items-center gap-2">
                    <PersonStanding className="w-6 h-6 text-neutral-50" />{" "}
                    Incremento población mundial
                  </div>
                  <div className="mt-4 rounded-xl overflow-hidden">
                    <ResponsiveContainer width="100%" height={160}>
                      <LineChart data={combinedData}>
                        <XAxis
                          dataKey="year"
                          tickFormatter={(year) =>
                            ["1980", "1990", "2000", "2010", "2020"].includes(
                              year
                            )
                              ? year
                              : ""
                          }
                        />
                        <Tooltip content={<CustomTooltip />} />
                        <Line
                          type="monotone"
                          dataKey="carne"
                          stroke="#ef4444"
                          strokeWidth={2}
                          dot={false}
                          name="Carne"
                        />
                        <Line
                          type="monotone"
                          dataKey="poblacion"
                          stroke="#fafafa"
                          strokeWidth={2}
                          dot={false}
                          name="Población"
                        />
                      </LineChart>
                    </ResponsiveContainer>
                    <div className="pt-2 font-extralight">
                      <p>FUENTES CONSULTADAS</p>
                      <p>
                        <a href="https://population.un.org/wpp" target="_blank">
                          ONU – World Population Prospects
                        </a>
                      </p>
                      <p>
                        <a
                          href="https://ourworldindata.org/meat-production"
                          target="_blank"
                        >
                          FAO Food and Agriculture Organization – FAOSTAT
                        </a>
                      </p>
                    </div>
                  </div>
                </>
              }
              data={[]} // Puedes dejarlo vacío si ya estás usando combinedData
            />
          </div>

          {/* GRAFICA CONSUMO DE PESCADO //////////////////////////////////////////////////////////////////*/}

          <div className="flex-1">
            <StatCard
              title="Incremento relativo 1980–2020: pescado vs población"
              value={<span className="text-red-500">+220,20 %</span>}
              changeText={
                <>
                  El consumo mundial de pescado aumentó un{" "}
                  <strong>220,20 %</strong> desde 1980, mientras que la
                  población creció un <strong>77,27 %</strong> en ese mismo
                  periodo.
                  <div className="pt-4 flex items-center gap-2">
                    <Fish className="w-6 h-6  text-cyan-500" /> Incremento
                    consumo de pescado mundial
                  </div>
                  <div className="pt-1 flex items-center gap-2">
                    <PersonStanding className="w-6 h-6 text-neutral-50" />{" "}
                    Incremento población mundial
                  </div>
                  <div className="mt-4 rounded-xl overflow-hidden">
                    <ResponsiveContainer width="100%" height={160}>
                      <LineChart data={combinedDataFish}>
                        <XAxis
                          dataKey="year"
                          tickFormatter={(year) =>
                            ["1980", "1990", "2000", "2010", "2020"].includes(
                              year
                            )
                              ? year
                              : ""
                          }
                        />
                        <Tooltip content={<CustomTooltipFish />} />
                        <Line
                          type="monotone"
                          dataKey="pescado"
                          stroke="#06b6d4"
                          strokeWidth={2}
                          dot={false}
                          name="Pescado"
                        />
                        <Line
                          type="monotone"
                          dataKey="poblacion"
                          stroke="#fafafa"
                          strokeWidth={2}
                          dot={false}
                          name="Población"
                        />
                      </LineChart>
                    </ResponsiveContainer>
                    <div className="pt-2 font-extralight">
                      <p>FUENTES CONSULTADAS</p>
                      <p>
                        <a href="https://population.un.org/wpp" target="_blank">
                          ONU – World Population Prospects
                        </a>
                      </p>
                      <p>
                        <a
                          href="https://ourworldindata.org/meat-production"
                          target="_blank"
                        >
                          FAO Food and Agriculture Organization – FAOSTAT
                        </a>
                      </p>
                    </div>
                  </div>
                </>
              }
              data={[]} // Puedes dejarlo vacío si ya estás usando combinedData
            />
          </div>

          {/* GRAFICA CONSUMO DE VERDURAS //////////////////////////////////////////////////////////////////*/}

          <div className="flex-1">
            <StatCard
              title="Incremento relativo 1980–2020: verduras vs población"
              value={<span className="text-red-500">+114,29 %</span>}
              changeText={
                <>
                  El consumo mundial de verduras aumentó un{" "}
                  <strong>114,29 %</strong> desde 1980, mientras que la
                  población creció un <strong>77,27 %</strong> en ese mismo
                  periodo.
                  <div className="pt-4 flex items-center gap-2">
                    <Leaf className="w-6 h-6  text-emerald-500" /> Incremento
                    consumo de verduras mundial
                  </div>
                  <div className="pt-1 flex items-center gap-2">
                    <PersonStanding className="w-6 h-6 text-neutral-50" />{" "}
                    Incremento población mundial
                  </div>
                  <div className="mt-4 rounded-xl overflow-hidden">
                    <ResponsiveContainer width="100%" height={160}>
                      <LineChart data={combinedDataVegetables}>
                        <XAxis
                          dataKey="year"
                          tickFormatter={(year) =>
                            ["1980", "1990", "2000", "2010", "2020"].includes(
                              year
                            )
                              ? year
                              : ""
                          }
                        />
                        <Tooltip content={<CustomTooltipVegetables />} />
                        <Line
                          type="monotone"
                          dataKey="verduras"
                          stroke="#10b981"
                          strokeWidth={2}
                          dot={false}
                          name="Verduras"
                        />
                        <Line
                          type="monotone"
                          dataKey="poblacion"
                          stroke="#fafafa"
                          strokeWidth={2}
                          dot={false}
                          name="Población"
                        />
                      </LineChart>
                    </ResponsiveContainer>
                    <div className="pt-2 font-extralight">
                      <p>FUENTES CONSULTADAS</p>
                      <p>
                        <a href="https://population.un.org/wpp" target="_blank">
                          ONU – World Population Prospects
                        </a>
                      </p>
                      <p>
                        <a
                          href="https://ourworldindata.org/meat-production"
                          target="_blank"
                        >
                          FAO Food and Agriculture Organization – FAOSTAT
                        </a>
                      </p>
                    </div>
                  </div>
                </>
              }
              data={[]} // Puedes dejarlo vacío si ya estás usando combinedData
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
