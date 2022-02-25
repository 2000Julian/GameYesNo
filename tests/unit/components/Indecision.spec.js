import { shallowMount } from "@vue/test-utils"
import Indecision from '@/components/Indecicion'

describe('Component Indecision', ()=>{

    let wrapper
    let clgSpy

    beforeEach(()=>{
        wrapper = shallowMount( Indecision )

        clgSpy = jest.spyOn( console, 'log' )//hacemos un mock a esto, 
    }) 


    test('Debe de hacer math con el snapchopt', ()=>{
        expect( wrapper.html()).toMatchSnapshot();
    })

    test('Escribir en el input no debe de disparar nada (console.log)', async() =>{
        const getAnswerSpy = jest.spyOn( wrapper.vm, 'getAnswer' )

        const input = wrapper.find('input')
        await input.setValue('Hola mundo')
        expect( clgSpy ).toHaveBeenCalledTimes(1) //verificamos que haya sido llamado el metodo slgSpy
        expect( getAnswerSpy ).not.toHaveBeenCalled()
    })

    test('Al escribir el simbolo de (?) debe de disparar el fetch ', async() =>{
        
        const getAnswerSpy = jest.spyOn( wrapper.vm, 'getAnswer' )

        const input = wrapper.find('input')
        await input.setValue('Hola mundo?')

        expect( clgSpy ).toHaveBeenCalledTimes(2) //verificamos que haya sido llamado el metodo slgSpy
        expect( getAnswerSpy ).not.toHaveBeenCalled()
    })

    test('Prueba de getAnswer',() =>{

    })

    test(' Pruebas en getAnswer - Fallo en el API',() =>{

    })
})