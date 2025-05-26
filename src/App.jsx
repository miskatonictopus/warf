import Header from "./components/Header"
import warfImageLight from "./assets/warf_logo_white.png"
import warfImageDark from "./assets/warf_logo_black.png"
import MessageCard from "./components/MessageCard"

function App() {
  return (
    <div className="w-full min-h-screen bg-background text-foreground">
      <Header />

      <section className="mx-auto mt-10 max-w-[1200px] px-4">
  <div className="container mx-auto flex flex-col md:flex-row py-12">
    {/* Columna izquierda: Texto */}
    <div className="w-full md:w-1/2 flex items-center px-4 md:px-0">
  <div className="pl-4 md:pl-8">
        <h1 className="font-cormorant text-6xl md:text-6xl font-light tracking-none text-foreground">
          Creemos firmemente que la <strong>tecnología</strong> puede ayudarnos a construir un mundo donde humanos y animales vivan juntos en <strong>equilibrio</strong> y <strong>respeto</strong>.
        </h1>
      </div>
    </div>

    {/* Columna derecha: Imagen */}
    <div className="w-full md:w-1/2 relative h-[300px] md:h-auto flex items-center justify-center px-4 md:px-8">
      <img
        src={warfImageLight}
        alt="WARF logo rata clara"
        className="w-full h-auto max-h-[1200px] object-contain block dark:hidden"
      />
    <img
      src={warfImageDark}
      alt="WARF logo rata oscura"
      className="w-full h-auto max-h-[1200px] object-contain hidden dark:block"
    />

    </div>
  </div>
</section>


      <div className="mx-auto mt-10 max-w-[1200px] px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <MessageCard title="Dignidad animal como principio irrenunciable.">
            <>
              En WARF creemos que <strong>la dignidad no es un privilegio humano</strong>, sino un derecho inherente a todo ser vivo.  
              Los animales no son recursos. No son entretenimiento. No son objetos.  
              Son seres con sensibilidad, necesidades, emociones y valor propio.

              Defender su dignidad es reconocer su existencia como legítima y valiosa, más allá de su utilidad para el ser humano.
            </>
          </MessageCard>
          <MessageCard title="Transparencia en todo lo que hacemos.">
          <>
          En WARF entendemos que la confianza se construye con hechos visibles.
Por eso <strong>actuamos con total claridad</strong>: cada decisión, cada recurso y cada acción está abierta al escrutinio público.
No escondemos procesos ni maquillamos resultados.
Creemos que quienes defienden vidas deben ser los primeros en dar ejemplo.
            </>
            </MessageCard>
          <MessageCard
            title="Compromiso total con cada animal del planeta."
            message="Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed et elit eget lectus laoreet commodo non vitae orci. Duis euismod leo ac vulputate fermentum. Suspendisse blandit justo ac enim facilisis, vel tempor mauris imperdiet. Nulla posuere odio at semper vulputate. Nam eu enim id ligula consequat tincidunt."
          />
          <MessageCard
            title="Acción directa y real, sin postureo."
            message="Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed et elit eget lectus laoreet commodo non vitae orci. Duis euismod leo ac vulputate fermentum. Suspendisse blandit justo ac enim facilisis, vel tempor mauris imperdiet. Nulla posuere odio at semper vulputate. Nam eu enim id ligula consequat tincidunt."
          />
        </div>
      </div>
    </div>
  )
}

export default App
