import{r,u as P,R as e,a as d}from"./index-DWn6bmYd.js";import{C,h as T}from"./congratulations-C_qT3a2x.js";const b="/assets/shield-yShal2eh.png",S="/assets/refresh-CDKOpQuO.png",A=({email:c,onResendOtp:w})=>{const[o,i]=r.useState(["","","","","",""]),[u,n]=r.useState(""),[h,l]=r.useState(!1),[g,f]=r.useState(!1),m=r.useRef([]),E=P(),v=(t,s)=>{const a=t.target.value;if(/^\d$/.test(a)||a===""){const p=[...o];p[s]=a,i(p),a!==""&&s<5&&m.current[s+1].focus()}},y=async()=>{const t=o.join("");if(!t){n("Please enter the OTP.");return}try{const s=await d.verifyOTP(c,t);l(!0),n(""),console.log("OTP verified successfully:",s),f(!0),console.log("showCongratulations:",!0),E("/congratulations")}catch(s){console.error("OTP verification failed:",s),n(s.message||"Invalid OTP. Please try again."),l(!1)}},N=async()=>{i(["","","","","",""]),n(""),l(!1);try{const t=await d.resendOTP(c);console.log("OTP resent successfully:",t)}catch(t){console.error("Failed to resend OTP:",t),n(t.message||"Failed to resend OTP.")}},O=o.every(t=>t!=="");return g?e.createElement(C,null):e.createElement("div",{className:"otp-container"},e.createElement("div",{className:"aits-logo"},"AITS"),e.createElement("div",{className:"help"},e.createElement("img",{src:T,alt:"help logo",className:"help-logo"}),"Help?",e.createElement("div",{className:"tooltip"},"Email Address: alvin69david@gmail.com Phone Number: 0758862363")),e.createElement("div",{className:"otp-content"},e.createElement("img",{className:"shield",src:b,alt:"shiled logo"}),e.createElement("h2",{className:"authenticate-title"},"Authenticate Your Account"),e.createElement("p",{className:"authenticate-sub-title"},"Protecting your account is our top priority. Please confirm your account by entering the authorization code we sent to ",e.createElement("strong",null,c),"."),e.createElement("div",{className:"otp-inputs"},o.map((t,s)=>e.createElement("input",{key:s,className:"otp-input",type:"text",maxLength:"1",value:t,onChange:a=>v(a,s),ref:a=>m.current[s]=a}))),e.createElement("button",{className:"verify-button",onClick:y,disabled:!O},"Verify"),e.createElement("button",{className:"resend-button",onClick:N},e.createElement("img",{className:"refresh-icon",src:S,alt:"refresh icon"}),"Resend Code"),u&&e.createElement("p",{className:"error-message"},u),h&&e.createElement("p",{className:"success-message"},"OTP verified successfully!")))};export{A as default};
