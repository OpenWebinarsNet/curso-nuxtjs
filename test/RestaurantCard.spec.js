import { mount } from '@vue/test-utils'
import RestaurantCard from '~/components/RestaurantCard'
import { exportAllDeclaration } from '@babel/types'

describe('RestaurantCard', () => {
  const props = {
    id: 0,
    name: 'nombre',
    description: 'description',
    text: 'testo largo',
    slug: 'slug',
    category: 'categoria',
    city: 'ciudad',
    address: 'direccion',
    likes: 0,
    image: 'https://netlify.pedrojimenez.info/photosCursoOpenWebinar/restaurant08.jpg'
  }

  const wrapper = mount(RestaurantCard, { propsData: props })
    test('is mounted', () =>{
      expect(wrapper.isVueInstance()).toBe(true)
    })

    test('is rendering a restaurant', () => {
      expect(wrapper.props().name).toBe('nombre')
      expect(wrapper.props().description).toBe('description')
    })

})