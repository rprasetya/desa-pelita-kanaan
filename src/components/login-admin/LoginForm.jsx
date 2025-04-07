// "use client";

// import { useState } from "react";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { useRouter } from "next/navigation";

// const LoginForm = () => {
//     const [formData, setFormData] = useState({
//         email: "",
//         password: "",
//     });
    
//     const router = useRouter();
    
//     const handleChange = (e) => {
//         setFormData({ 
//             ...formData, 
//             [e.target.name]: e.target.value 
//         });
//     };
    
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log("Login:", formData);
//     };
    
//     const handleBack = () => {
//         router.back();
//     };

//     return (
//         <div className="flex items-center justify-center mt-20">
//             <div className="bg-white px-8 py-16 rounded-xl shadow-xl w-full max-w-md">
//                 <h1 className="text-2xl font-semibold text-center mb-6">Login Admin</h1>
//                 <form onSubmit={handleSubmit} className="space-y-4">
//                     <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
//                     <Input
//                         type="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         placeholder="you@example.com"
//                         required
//                     />
//                     </div>

//                     <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
//                     <Input
//                         type="password"
//                         name="password"
//                         value={formData.password}
//                         onChange={handleChange}
//                         placeholder="••••••••"
//                         required
//                     />
//                     </div>

//                     <div className="flex justify-between mt-6">
//                     <Button
//                         type="button"
//                         variant="outline"
//                         onClick={handleBack}
//                         className="cursor-pointer"
//                     >
//                         Kembali
//                     </Button>
//                     <Button type="submit" className="cursor-pointer bg-kanaan-blue">
//                         Masuk
//                     </Button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default LoginForm