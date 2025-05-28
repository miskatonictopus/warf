import Header from "./components/Header"
import warfImageLight from "./assets/warf_logo_white.png"
import warfImageDark from "./assets/warf_logo_black.png"
import MessageCard from "./components/MessageCard"
import fox_card from "./assets/fox-card.jpg"
import ant_card from "./assets/ant-card.jpg"
import bear_card from "./assets/bear-card.jpg"
import jellyfish_card from "./assets/jellyfish-card.jpg"
import moth_card from "./assets/moth-card.jpg"
import squid_card from "./assets/squid-card.jpg"
import bat_card from "./assets/bat-card.jpg"
import owl_card from "./assets/owl-card.jpg"


function App() {
  return (
    <div className="w-full min-h-screen bg-background text-foreground">
      <Header />

      <section className="mx-auto mt-10 max-w-[1200px] px-4">
        <div className="container mx-auto flex flex-col md:flex-row py-12">
          <div className="w-full flex items-center px-4 md:px-0">
            <div className="pl-4">
              <h1 className="font-cormorant text-center text-6xl md:text-6xl font-light tracking-none text-foreground">
                Creemos firmemente que la <strong>tecnología</strong> puede ayudarnos a construir un mundo donde humanos y animales vivan juntos en <strong>equilibrio</strong> y <strong>respeto</strong>.
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
                En WARF creemos que <strong>la dignidad no es un privilegio humano</strong>, sino un derecho inherente a todo ser vivo.  
                Los animales no son recursos. No son entretenimiento. No son objetos.  
                Son seres con sensibilidad, necesidades, emociones y valor propio.
                Defender su dignidad es reconocer su existencia como legítima y valiosa, más allá de su utilidad para el ser humano.
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
                En WARF entendemos que la confianza se construye con hechos visibles.
                Por eso <strong>actuamos con total claridad</strong>: cada decisión, cada recurso y cada acción está abierta al escrutinio público.
                No escondemos procesos ni maquillamos resultados.
                Creemos que quienes defienden vidas deben ser los primeros en dar ejemplo.
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
            <MessageCard
              title="Compromiso total con cada animal del planeta."
              message="Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed et elit eget lectus laoreet commodo non vitae orci. Duis euismod leo ac vulputate fermentum. Suspendisse blandit justo ac enim facilisis, vel tempor mauris imperdiet. Nulla posuere odio at semper vulputate. Nam eu enim id ligula consequat tincidunt."
            />
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
            <MessageCard
              title="Acción directa y real, sin postureo."
              message="Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed et elit eget lectus laoreet commodo non vitae orci. Duis euismod leo ac vulputate fermentum. Suspendisse blandit justo ac enim facilisis, vel tempor mauris imperdiet. Nulla posuere odio at semper vulputate. Nam eu enim id ligula consequat tincidunt."
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
