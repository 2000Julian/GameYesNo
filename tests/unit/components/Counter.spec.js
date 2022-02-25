import {shallowMount} from '@vue/test-utils'
import Counter  from '@/components/Counter'



describe('Counter component', ()=>{

    let wrapper 

    beforeEach(()=>{
        wrapper = shallowMount ( Counter )
    })



   // test('Debe de ser hacer math con el snapchop', ()=>{

    //         //wrapper estandar que envuelve todo
    //     const wrapper = shallowMount( Counter )
    //     expect( wrapper.html() ).toMatchSnapshot()//captura una copia de codigo htmal y lo compara a ver si cambio
    // })
     test('h2 debe tener el valor por defecto "Counter', () =>{
        expect( wrapper.find('h2').exists() ).toBeTruthy()//verifica que exista elelemento
        const h2=  wrapper.find('h2')

        console.log( h2.text() )
        expect (h2.text() ).toBe( 'Counter')
     })

     test('El valor por defecto debe ser 100 en el p',async ()=>{

        //const pTags = wrapper.findAll('p')
        const value = wrapper.find('[data-testid="counter"]').text()
        console.log( value )
        //expect( value[1].text() ).toBe('100')
        expect( value ).toBe('100')

     })

     test('Debe de incrementar y decrementar el valor del contador', async() =>{

         const [increase, decrease]  = wrapper.findAll('button')

        await increase.trigger('click')
        await increase.trigger('click')
        await increase.trigger('click')
        await decrease.trigger('click')
        await decrease.trigger('click')
         //expect( value ).toBe('101')
         //TODO: Tarea
        const value = wrapper.find('[data-testid="counter"]').text()
        expect( value ).toBe('101')
     })

     test('Debe de establecer el valor por defecto', () =>{

        const { start } = wrapper.props()
        console.log(start)

        const value = wrapper.find('[data-testid="counter"]').text()

        expect( Number( value )).toBe( start )
     })


     test('Debe de mostrar la prop title', () =>{
        const title = 'Hola Mundo!!!'
        const wrapper = shallowMount ( Counter, {
            props: {
                title,
                start: '5'
            }
        } )

        const { start } = wrapper.props()
        console.log( typeof start )

        console.log( wrapper.html() )

        expect( wrapper.find( 'h2' ).text()).toBe( title )
     })
})