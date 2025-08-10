import { defineType, defineField } from 'sanity'
export default defineType({name:'project',title:'Project',type:'document',fields:[
  defineField({name:'title',type:'string',title:'عنوان المشروع',validation:r=>r.required()}),
  defineField({name:'slug',type:'slug',title:'Slug',options:{source:'title',maxLength:96},validation:r=>r.required()}),
  defineField({name:'featured',type:'boolean',title:'Featured'}),
  defineField({name:'orderRank',type:'number',title:'ترتيب العرض',initialValue:0}),
  defineField({name:'tags',type:'array',title:'Tags',of:[{type:'string'}]}),
  defineField({name:'description',type:'text',title:'وصف مختصر'}),
  defineField({name:'cover',type:'image',title:'صورة الغلاف',options:{hotspot:true}}),
  defineField({name:'images',type:'array',title:'صور المشروع',of:[{type:'image',options:{hotspot:true}}]}),
]})
