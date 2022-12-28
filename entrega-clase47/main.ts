
import { Application, Router } from 'https://deno.land/x/oak/mod.ts'

const htmlStart: string = `
    <!DOCTYPE html>
    <html lang='en'>
    <head>
    <meta charset='UTF-8'>
    <title>Entrega Deno</title>
    </head>
    <body>
    <form action='http://localhost:8080' method='post'>
        <label> Agrege el color a la lista </label>
        <input type='text' name='color' id='colorInput' value=''/>
        <input type='submit' value='Enviar'>
    </form>
    <ul>`

let dynamicHtml: string = ''
const addColorToHtml = (color) => {
    return dynamicHtml = dynamicHtml.concat(`<li style='color: ${color}'>${color}</li>`)
}

let htmlEnd: string = `</ul></body></html>`

let colors: string[] = []

const router = new Router()
router
    .get('/', (ctx) => {
        const HTML = htmlStart.concat(dynamicHtml, htmlEnd)
        ctx.response.headers.set('Content-Type', 'text/html')
        ctx.response.body = HTML
    })
    .post('/', async (ctx) => {
        const color = await ctx.request.body({type: 'form'}).value
        const fixedColor = color.get('color')
        colors.push(fixedColor)
        addColorToHtml(fixedColor)
        const HTML = htmlStart.concat(dynamicHtml, htmlEnd)
        ctx.response.headers.set('Content-Type', 'text/html')
        ctx.response.body = HTML
    })

const app = new Application()

app.use(router.routes())
app.use(router.allowedMethods())

const PORT: number = 8080
await app.listen({ port: PORT })