import { defineType, defineField } from 'sanity'
export default defineType({name:'settings',title:'Settings',type:'document',fields:[
  defineField({name:'siteTitle',type:'string',title:'اسم الموقع'}),
  defineField({name:'bio',type:'text',title:'نبذة قصيرة'}),
  defineField({name:'primaryEmail',type:'string',title:'إيميل التواصل'}),
  defineField({name:'social',type:'array',title:'روابط السوشيال',of:[{type:'url'}]}),
]})
