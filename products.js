import { createApp } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.0.9/vue.esm-browser.js';

createApp({
  data() {
    return { 
      Section:  [
                        { Width:"2",   X: "0",  Y:"0",  Height:"2", Color: "#000" },
                        { Width:"2",   X: "2",  Y:"0",  Height:"2", Color: "#777" },
                        { Width:"1",   X: "0",  Y:"2",  Height:"1", Color: "#666" },
                        { Width:"1",   X: "1",  Y:"2",  Height:"1", Color: "#aaa" },
                        { Width:"1",   X: "2",  Y:"2",  Height:"1", Color: "#ccc" },
                        { Width:"1",   X: "3",  Y:"2",  Height:"1", Color: "#fff" }
                ],
      }
    },
  mounted() {
  
  },
  methods: {

}
}).mount('#app');
