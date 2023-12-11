import{r as n,W as k,j as e,a as D}from"./app-507ae73f.js";import{A as C}from"./AuthenticatedLayout-4b09d535.js";import{P as E}from"./PrimaryButton-fdfac215.js";import{L as R}from"./LinkButton-a9ddd0ab.js";import P from"./Form-0da8a8e3.js";import S from"./FormDetail-c5b7a789.js";import{F}from"./index.es-de57706a.js";import"./ApplicationLogo-8566a54f.js";import"./transition-31713d59.js";import"./InputLabel-3bc1159e.js";import"./TextInput-51fdd16b.js";import"./TextArea-892b90af.js";function K({auth:h,patients:p,foodgroups:c,mealtimes:i}){const[a,o]=n.useState([]),[u,d]=n.useState(!1);console.log(c),console.log(i),n.useEffect(()=>{b(),m(t=>({...t,detalles:a}))},[a]);const{data:j,setData:m,delete:A,post:g,patch:G,processing:B,reset:I,errors:f}=k({id:"",fecha:"",peso:0,grasa:0,porcentajeGrasa:0,agua:0,musculo:0,grasaVisceral:0,proteina:0,minerales:0,pecho:0,cintura:0,cadera:0,idPaciente:"",detalles:a}),w=t=>{const{name:s,value:r}=t.target;m(l=>({...l,[s]:r}))},N=t=>{o(s=>[...s,t])},y=t=>{o(s=>s.filter((r,l)=>l!==t))},b=()=>{a.length>0?d(!0):d(!1)},x=(t,s)=>{const r=t.find(l=>l.id===parseInt(s));return r?r.nombre:""},v=t=>{t.preventDefault(),g(route("plans.store"),{onSuccess:()=>{console.log("SUCCESS"),closeFormModal()},onError:()=>{console.log("ERROR"),console.log(f)}})};return e.jsxs(C,{user:h.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:"Planes"}),children:[e.jsx(D,{title:"Planes"}),e.jsx("div",{className:"grid v-screen place-items-center mt-4",children:e.jsx("div",{className:"mt-3 mb-3 flex justify-end",children:e.jsx(R,{className:"w-auto m-1",href:route("plans.index"),children:"Regresar"})})}),e.jsxs("div",{className:"grid v-screen place-items-center mt-4 px-4",children:[e.jsx("div",{className:"w-full sm:w-2/3 xl:w-2/4 2xl:w-2/6 bg-white dark:bg-gray-700/75",children:e.jsx(P,{titulo:"Crear",data:j,patients:p,submitData:t=>v(t),handleChange:t=>w(t),ready:u})}),e.jsx("div",{className:"w-full sm:w-2/3 xl:w-2/4 2xl:w-2/6 bg-white dark:bg-gray-700/75",children:e.jsx(S,{foodgroups:c,mealtimes:i,handleDetalles:N})}),e.jsxs("div",{className:"w-full sm:w-2/3 xl:w-2/4 2xl:w-2/6 bg-white dark:bg-gray-700/75 p-6",children:[e.jsx("h2",{className:"text-2xl font-medium text-black dark:text-white mb-3",children:"Detalles del Plan"}),a&&a.length>0?e.jsx("div",{className:"mx-auto",children:e.jsxs("table",{className:"table-fixed bg-gray-800 rounded-xl overflow-hidden w-auto mx-auto my-4",children:[e.jsx("thead",{className:"bg-gray-700 text-white",children:e.jsxs("tr",{children:[e.jsx("th",{className:"w-auto px-4 py-3 text-left",children:"Cantidad"}),e.jsx("th",{className:"w-auto px-4 py-3 text-left",children:"Descripción"}),e.jsx("th",{className:"w-auto px-4 py-3 text-left",children:"Grupo"}),e.jsx("th",{className:"w-auto px-4 py-3 text-left",children:"Tiempo"}),e.jsx("th",{className:"w-auto px-4 py-3 text-left"})]})}),e.jsx("tbody",{className:"text-white",children:a.map((t,s)=>e.jsxs("tr",{children:[e.jsx("td",{className:"px-4 py-3",children:t.cantidad}),e.jsx("td",{className:"px-4 py-3",children:t.descripcion}),e.jsx("td",{className:"px-4 py-3",children:c.length&&x(c,t.idGrupoComida)}),e.jsx("td",{className:"px-4 py-3",children:i.length&&x(i,t.idTiempoComida)}),e.jsx("td",{className:"w-fit px-4 py-3 inline-flex justify-end",children:e.jsx(E,{className:"w-auto m-1 dark:focus:hover:bg-red-500 dark:hover:!bg-red-500 dark:hover:text-white",title:"Eliminar",onClick:()=>y(s),children:e.jsx(F,{className:"text-lg",icon:["far","trash-can"]})})})]},s))})]})}):e.jsx("div",{className:"grid v-screen place-items-center mt-4",children:e.jsx("h2",{className:"text-2xl font-medium text-black dark:text-white mb-3",children:"No existen detalles"})})]})]})]})}export{K as default};