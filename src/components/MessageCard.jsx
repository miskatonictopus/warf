import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardFooter,
    CardText
  } from "@/components/ui/card"
  
  export default function MessageCard({ title, message, children }) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="font-cormorant text-3xl font-light tracking-tight leading-extra-tight text-foreground">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          {message ? (
            <CardText>{message}</CardText>
          ) : (
            <CardText>{children}</CardText>
          )}
        </CardContent>
        <CardFooter className="text-sm text-muted-foreground">
          Última actualización: ahora
        </CardFooter>
      </Card>
    )
  }
  
