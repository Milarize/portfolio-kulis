import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Portfolio from '../Portfolio.vue'

describe('Portfolio Component', () => {
  it('renders all sections correctly', () => {
    const wrapper = mount(Portfolio)
    
    // ตรวจสอบว่ามีส่วนต่างๆ ครบถ้วน
    expect(wrapper.find('header').exists()).toBe(true)
    expect(wrapper.find('#projects').exists()).toBe(true)
    expect(wrapper.find('#skills').exists()).toBe(true)
    expect(wrapper.find('#contact').exists()).toBe(true)
  })

  it('displays correct number of projects', () => {
    const wrapper = mount(Portfolio)
    const projectCards = wrapper.findAll('.project-card')
    expect(projectCards).toHaveLength(2)
  })

  it('displays project information correctly', () => {
    const wrapper = mount(Portfolio)
    const firstProject = wrapper.find('.project-card')
    
    expect(firstProject.find('h3').text()).toBe('E-commerce Website')
    expect(firstProject.find('p').text()).toContain('full-stack e-commerce platform')
  })

  it('displays correct number of skills', () => {
    const wrapper = mount(Portfolio)
    const skillItems = wrapper.findAll('.skill-item')
    expect(skillItems).toHaveLength(4)
  })

  it('displays skill levels correctly', () => {
    const wrapper = mount(Portfolio)
    const vueSkill = wrapper.findAll('.skill-item')[0]
    
    expect(vueSkill.find('.skill-name').text()).toBe('Vue.js')
    expect(vueSkill.find('.skill-percentage').text()).toBe('90%')
  })

  it('displays contact information correctly', () => {
    const wrapper = mount(Portfolio)
    const contactLinks = wrapper.findAll('.contact-info a')
    
    expect(contactLinks[0].text()).toBe('your.email@example.com')
    expect(contactLinks[1].text()).toBe('GitHub')
    expect(contactLinks[2].text()).toBe('LinkedIn')
  })

  it('has correct navigation links', () => {
    const wrapper = mount(Portfolio)
    const navLinks = wrapper.findAll('nav a')
    
    expect(navLinks[0].attributes('href')).toBe('#projects')
    expect(navLinks[1].attributes('href')).toBe('#skills')
    expect(navLinks[2].attributes('href')).toBe('#contact')
  })

  it('displays technology tags for projects', () => {
    const wrapper = mount(Portfolio)
    const firstProject = wrapper.find('.project-card')
    const techTags = firstProject.findAll('.tech-tag')
    
    expect(techTags[0].text()).toBe('Vue.js')
    expect(techTags[1].text()).toBe('Node.js')
    expect(techTags[2].text()).toBe('MongoDB')
  })
}) 