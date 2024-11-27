import { mount, shallowMount } from '@vue/test-utils'
import Slamboo from '@/components/Slamboo.vue'
import { vi } from 'vitest'
import CommonButton from '../../../src/components/common/CommonButton.vue'

describe('Testing Slamboo.vue', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('renders form inputs and button', () => {
    const wrapper = mount(Slamboo)

    expect(
      wrapper.findAllComponents({ name: 'CommonFormInputs' })
    ).toHaveLength(4)

    expect(wrapper.findAllComponents(CommonButton)).toHaveLength(2)
  })

  it('submits data successfully', () => {
    const wrapper = shallowMount(Slamboo, {
      data() {
        return {
          formData: {
            fullname: 'John Doe',
            nickname: 'John',
            age: 23,
            email: 'jd@ggmail.com',
          },
        }
      },
    })

    const addFriend = vi.spyOn(console, 'log')

    wrapper.vm.addFriend()

    expect(addFriend).toBeCalledWith({
      fullname: 'John Doe',
      nickname: 'John',
      age: 23,
      email: 'jd@ggmail.com',
    })
  })

  it('should render an alert button if submission fails', () => {
    const wrapper = shallowMount(Slamboo, {
      data() {
        return {
          formData: {
            fullname: '',
            nickname: 'John',
            age: 23,
            email: 'jd@ggmail.com',
          },
        }
      },
    })

    const alertSpy = vi.spyOn(window, 'alert')

    wrapper.vm.addFriend()

    expect(alertSpy).toHaveBeenCalledWith('Please Enter fullname')

    alertSpy.mockRestore()
  })

  it('should clear the form', () => {
    const wrapper = shallowMount(Slamboo, {
      data() {
        return {
          formData: {
            fullname: '',
            nickname: '',
            age: '',
            email: '',
          },
        }
      },
    })

    vi.spyOn(window, 'confirm').mockReturnValue(true)

    wrapper.vm.reset()

    expect(wrapper.vm.formData).toStrictEqual({
      fullname: '',
      nickname: '',
      age: '',
      email: '',
    })
  })

  it('should test the html rendering of child component from shallowMount', () => {
    const wrapper = shallowMount(Slamboo, {
      global: {
        stubs: {
          BForm: false,
          CommonButton: false,
        },
      },
    })

    expect(
      wrapper.findAllComponents({ name: 'CommonFormInputs' })
    ).toHaveLength(4)

    expect(wrapper.findAllComponents({ name: 'CommonButton' })).toHaveLength(2)

    expect(
      wrapper.getComponent({ name: 'CommonButton' }).isVisible()
    ).toBeTruthy()
  })
})
