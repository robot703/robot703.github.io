import{_ as k,u as v,r as C,c as b,a as o,w as e,b as t,o as B,d as L,e as f,p as S,f as G,g as I}from"./index-BOkD3hqs.js";const F={name:"Login",setup(){const a=v(),n=C(""),l=C("");return{username:n,password:l,handleLogin:()=>{n.value==="1234"&&l.value==="1234"?(localStorage.setItem("authToken","fake-jwt-token"),a.push("/main")):alert("Invalid credentials")}}}},g=a=>(S("data-v-5d8aa851"),a=a(),G(),a),T={class:"login-container"},N=g(()=>I("h1",null,"Login",-1)),R=g(()=>I("p",{class:"text-body-secondary"},"Sign In to your account",-1));function U(a,n,l,s,j,q){const d=t("CIcon"),u=t("CInputGroupText"),p=t("CFormInput"),_=t("CInputGroup"),m=t("CButton"),r=t("CCol"),i=t("CRow"),w=t("CForm"),h=t("CCardBody"),x=t("CCard"),y=t("CCardGroup"),V=t("CContainer");return B(),b("div",T,[o(V,null,{default:e(()=>[o(i,{class:"justify-content-center align-items-center"},{default:e(()=>[o(r,{md:"5"},{default:e(()=>[o(y,null,{default:e(()=>[o(x,{class:"p-4"},{default:e(()=>[o(h,null,{default:e(()=>[o(w,{onSubmit:L(s.handleLogin,["prevent"])},{default:e(()=>[N,R,o(_,{class:"mb-3"},{default:e(()=>[o(u,null,{default:e(()=>[o(d,{icon:"cil-user"})]),_:1}),o(p,{modelValue:s.username,"onUpdate:modelValue":n[0]||(n[0]=c=>s.username=c),placeholder:"Username",autocomplete:"username",required:""},null,8,["modelValue"])]),_:1}),o(_,{class:"mb-4"},{default:e(()=>[o(u,null,{default:e(()=>[o(d,{icon:"cil-lock-locked"})]),_:1}),o(p,{modelValue:s.password,"onUpdate:modelValue":n[1]||(n[1]=c=>s.password=c),type:"password",placeholder:"Password",autocomplete:"current-password",required:""},null,8,["modelValue"])]),_:1}),o(i,null,{default:e(()=>[o(r,{xs:"6"},{default:e(()=>[o(m,{color:"primary",class:"px-4",type:"submit"},{default:e(()=>[f("Login")]),_:1})]),_:1}),o(r,{xs:"6",class:"text-right"},{default:e(()=>[o(m,{color:"link",class:"px-0"},{default:e(()=>[f(" Forgot password? ")]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])}const M=k(F,[["render",U],["__scopeId","data-v-5d8aa851"]]);export{M as default};
