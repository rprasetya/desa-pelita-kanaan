"use client";

import { useState } from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

const FormBukuTamu = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        comment: "",
    });
    
    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
    };
    
    const handleReset = () => {
        setFormData({ name: "", email: "", comment: "" });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Data terkirim:", formData);
        // Kirim ke API atau database jika ada
        handleReset();
    };
    
    return (
        <div className=" mt-7 flex items-center justify-center px-4">
            <div className="max-w-xl w-full bg-white shadow-xl rounded-xl p-8">
            <h1 className="text-2xl font-bold text-center text-blue-900 mb-6">Buku Tamu</h1>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Nama</label>
                    <Input
                        type="text"
                        placeholder="Nama Lengkap"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <Input
                        type="email"
                        placeholder="E-mail"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Komentar</label>
                    <Textarea 
                        name="comment"
                        placeholder="Ketikkan Komentar..." 
                        value={formData.comment}
                        onChange={handleChange}
                    />
                </div>

                <div className="flex justify-end space-x-4">
                <Button
                    type="button"
                    onClick={handleReset}
                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                >
                    Batal
                </Button>
                <Button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                    Kirim
                </Button>
                </div>
            </form>
            </div>
        </div>
    );
}

export default FormBukuTamu