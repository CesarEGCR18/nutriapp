import{r as l,W as X,j as e,a as Y}from"./app-507ae73f.js";import{A as Z}from"./AuthenticatedLayout-4b09d535.js";import{M as G}from"./Modal-2a986313.js";import{P as t}from"./PrimaryButton-fdfac215.js";import{S as _}from"./SecondaryButton-a171b414.js";import{I as i}from"./InputLabel-3bc1159e.js";import{T as $}from"./TextArea-892b90af.js";import{T as f}from"./TextInput-51fdd16b.js";import{F as d}from"./index.es-de57706a.js";import{u as b}from"./useFormattedDate-fcca137b.js";import"./ApplicationLogo-8566a54f.js";import"./transition-31713d59.js";function xe({auth:R,detailplans:c,foodgroups:j,mealtimes:N,plans:v}){const[q,w]=l.useState(!1),[I,k]=l.useState(!1),[o,C]=l.useState({}),[y,M]=l.useState(""),[u,S]=l.useState(""),[m,F]=l.useState(null),{data:r,setData:x,delete:A,post:L,patch:O,processing:ee,reset:se,errors:p}=X({id:"",cantidad:"",descripcion:"",idGrupoComida:0,idTiempoComida:0,idPlan:0}),U=s=>{S(s.target.value)},V=s=>{const a=s.target.value;F(a?new Date(a):null)},B=()=>{S("")},P=()=>{F(null)},T=s=>s.normalize("NFD").replace(/[\u0300-\u036f]/g,""),z=s=>s.patients&&T(s.patients.nombre)+" "+T(s.patients.apellidos),g=c&&c.filter(s=>(console.log(s),(u===""||z(s.plans).toLowerCase().includes(u.toLowerCase().trim()))&&(!m||s.plans.fecha===m.toISOString().split("T")[0]))),W=s=>{w(!0),C(s)},D=()=>{w(!1),setTimeout(()=>{C({})},200)},E=(s,a={})=>{k(!0),M(s),x(s==="Crear"?{id:"",cantidad:"",descripcion:"",idGrupoComida:0,idTiempoComida:0,idPlan:0}:{id:a.id,cantidad:a.cantidad,descripcion:a.descripcion,idGrupoComida:a.idGrupoComida,idTiempoComida:a.idTiempoComida,idPlan:a.idPlan})},n=s=>{const{name:a,value:K}=s.target;x(Q=>({...Q,[a]:K})),console.log(r)},h=()=>{k(!1)},H=s=>{s.preventDefault(),y==="Crear"?L(route("detailplans.store"),{onSuccess:()=>{console.log("SUCCESS"),h()},onError:()=>{console.log("ERROR"),console.log(p)}}):O(route("detailplans.update",r),{onSuccess:()=>{console.log("SUCCESS"),h()},onError:()=>{console.log("ERROR"),console.log(p)}})},J=s=>{A(route("detailplans.destroy",s),{onSuccess:()=>{console.log("SUCCESS")},onError:()=>{console.log("ERROR"),console.log(p)}})};return e.jsxs(Z,{user:R.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:"Detalles"}),children:[e.jsx(Y,{title:"Detalles"}),e.jsx("div",{className:"grid v-screen place-items-center mt-4",children:e.jsx("div",{className:"mt-3 mb-3 flex justify-end",children:e.jsxs(t,{className:"w-auto m-1 focus:hover:bg-yellow-600 bg-yellow-600 hover:bg-yellow-700 dark:focus:hover:bg-yellow-500 dark:hover:!bg-yellow-500 dark:hover:text-white",title:"Crear Detalle",onClick:()=>E("Crear"),children:[e.jsx(d,{className:"text-lg mr-2",icon:["far","square-plus"]}),"Crear Detalle"]})})}),c&&c.length>0?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"grid v-screen place-items-center mt-4",children:[e.jsxs("div",{className:"mt-3 mb-3 flex w-2/6 justify-center",children:[e.jsx(i,{htmlFor:"filtroNombre",value:"Nombre",className:"w-12 mr-4 flex content-center items-center"}),e.jsx(f,{id:"filtroNombre",name:"filtroNombre",type:"text",className:"block w-2/4",value:u,onChange:U}),e.jsx(t,{className:"ml-4 w-auto",onClick:B,children:e.jsx(d,{className:"text-lg",icon:["fas","broom"]})})]}),e.jsxs("div",{className:"mt-3 mb-3 flex w-2/6 justify-center",children:[e.jsx(i,{htmlFor:"filtroFecha",value:"Fecha",className:"w-12 mr-4 flex content-center items-center"}),e.jsx(f,{id:"filtroFecha",name:"filtroFecha",type:"date",className:"block w-2/4",value:m?m.toISOString().split("T")[0]:"",onChange:V}),e.jsx(t,{className:"ml-4 w-auto",onClick:P,children:e.jsx(d,{className:"text-lg",icon:["fas","broom"]})})]})]}),g&&g.length>0?e.jsx("div",{className:"mx-auto",children:e.jsxs("table",{className:"table-fixed bg-gray-800 rounded-xl overflow-hidden w-auto mx-auto my-4",children:[e.jsx("thead",{className:"bg-gray-700 text-white",children:e.jsxs("tr",{children:[e.jsx("th",{className:"w-1/4 px-4 py-3 text-left",children:"Fecha"}),e.jsx("th",{className:"w-1/4 px-4 py-3 text-left",children:"Descripción"}),e.jsx("th",{className:"w-1/4 px-4 py-3 text-left",children:"Nombre"}),e.jsx("th",{className:"w-2/4 px-4 py-3 text-left"})]})}),e.jsx("tbody",{className:"text-white",children:g.map((s,a)=>e.jsxs("tr",{children:[e.jsx("td",{className:"px-4 py-3",children:s.plans&&b(s.plans.fecha)}),e.jsx("td",{className:"px-4 py-3",children:s.descripcion}),e.jsx("td",{className:"px-4 py-3",children:s.plans&&s.plans.patients.nombre+" "+s.plans.patients.apellidos}),e.jsxs("td",{className:"w-full px-4 py-3 inline-flex justify-end",children:[e.jsx(t,{className:"w-auto m-1 !bg-blue-500 focus:hover:bg-blue-600 hover:!bg-blue-600 dark:focus:hover:bg-blue-500 dark:hover:!bg-blue-500 dark:hover:text-white",onClick:()=>W(s),children:e.jsx(d,{className:"text-lg",icon:["far","eye"]})}),e.jsx(t,{className:"w-auto m-1 !bg-green-500 focus:hover:bg-green-600 hover:!bg-green-600 dark:focus:hover:bg-green-500 dark:hover:!bg-green-500 dark:hover:text-white",onClick:()=>E("Editar",s),children:e.jsx(d,{className:"text-lg",icon:["far","pen-to-square"]})}),e.jsx(t,{className:"w-auto m-1 !bg-red-500 focus:hover:bg-red-600 hover:!bg-red-600 dark:focus:hover:bg-red-500 dark:hover:!bg-red-500 dark:hover:text-white",onClick:()=>J(s),children:e.jsx(d,{className:"text-lg",icon:["far","trash-can"]})})]})]},s.id))})]})}):e.jsx("div",{className:"grid v-screen place-items-center mt-4",children:e.jsx("h2",{className:"text-2xl font-medium text-black dark:text-white mb-3",children:"No existen detalles para la búsqueda"})})]}):e.jsx("div",{className:"grid v-screen place-items-center mt-4",children:e.jsx("h2",{className:"text-2xl font-medium text-black dark:text-white mb-3",children:"No existen detalles"})}),e.jsx(G,{className:"mostrar-info",show:q,onClose:D,children:e.jsxs("div",{className:"w-full p-6",children:[e.jsx("h2",{className:"text-2xl font-medium text-black dark:text-white mb-3",children:"Paciente"}),e.jsxs("div",{className:"info text-lg text-black dark:text-white",children:[e.jsxs("p",{children:["ID: ",o.id]}),e.jsxs("p",{children:["Cantidad: ",o.cantidad]}),e.jsxs("p",{children:["Descripción: ",o.descripcion]}),e.jsxs("p",{children:["Grupo Alimenticio: ",o.foodgroups&&o.foodgroups.nombre]}),e.jsxs("p",{children:["Tiempo Alimenticio: ",o.mealtimes&&o.mealtimes.nombre]}),e.jsxs("p",{children:["Fecha: ",o.plans&&b(o.plans.fecha)]}),e.jsxs("p",{children:["Paciente: ",o.plans&&o.plans.patients.nombre+" "+o.plans.patients.apellidos]})]}),e.jsx("div",{className:"mt-5 mx-auto text-center",children:e.jsx(_,{onClick:()=>D(),children:"Cerrar"})})]})}),e.jsx(G,{className:"formulario",show:I,onClose:h,children:e.jsxs("div",{className:"w-full p-6",children:[e.jsx("h2",{className:"text-2xl font-medium text-black dark:text-white mb-3",children:y}),e.jsxs("form",{className:"p-4 grid grid-cols-1 gap-4 text-white",onSubmit:s=>H(s),children:[e.jsxs("div",{className:"mt-6",children:[e.jsx(i,{htmlFor:"cantidad",value:"Cantidad"}),e.jsx(f,{id:"cantidad",name:"cantidad",className:"mt-1 block w-full",required:!0,value:r.cantidad,onChange:s=>n(s)})]}),e.jsxs("div",{className:"mt-6",children:[e.jsx(i,{htmlFor:"descripcion",value:"Descripción"}),e.jsx($,{id:"descripcion",name:"descripcion",className:"mt-1 block w-full whitespace-pre-wrap",required:!0,value:r.descripcion,onChange:s=>n(s)})]}),e.jsxs("div",{className:"mt-6",children:[e.jsx(i,{htmlFor:"idGrupoComida",value:"Grupo alimenticio"}),e.jsxs("select",{required:!0,id:"idGrupoComida",name:"idGrupoComida",defaultValue:r&&r.idGrupoComida?r.idGrupoComida:"",className:"mt-1 block w-full text-black border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm",onChange:s=>n(s),children:[e.jsx("option",{value:"",disabled:!0,hidden:!0,children:"Seleccione un grupo alimenticio"}),j&&j.map((s,a)=>e.jsx("option",{value:s.id,children:s.nombre},a))]})]}),e.jsxs("div",{className:"mt-6",children:[e.jsx(i,{htmlFor:"idTiempoComida",value:"Tiempo de comida"}),e.jsxs("select",{required:!0,id:"idTiempoComida",name:"idTiempoComida",defaultValue:r&&r.idTiempoComida?r.idTiempoComida:"",className:"mt-1 block w-full text-black border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm",onChange:s=>n(s),children:[e.jsx("option",{value:"",disabled:!0,hidden:!0,children:"Seleccione un tiempo alimenticio"}),N&&N.map((s,a)=>e.jsx("option",{value:s.id,children:s.nombre},a))]})]}),e.jsxs("div",{className:"mt-6",children:[e.jsx(i,{htmlFor:"idPlan",value:"Plan alimenticio"}),e.jsxs("select",{required:!0,id:"idPlan",name:"idPlan",defaultValue:r&&r.idPlan?r.idPlan:"",className:"mt-1 block w-full text-black border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm",onChange:s=>n(s),children:[e.jsx("option",{value:"",disabled:!0,hidden:!0,children:"Seleccione un plan"}),v&&v.map((s,a)=>e.jsx("option",{value:s.id,children:b(s.fecha)+" - "+s.patients.nombre+" "+s.patients.apellidos},a))]})]}),e.jsxs("div",{className:"mt-6",children:[e.jsx(t,{type:"submit",className:"mt-3 mr-2 w-fit",children:"Guardar"}),e.jsx(t,{type:"button",className:"mt-3 w-fit",onClick:()=>h(),children:"Cerrar"})]})]})]})})]})}export{xe as default};