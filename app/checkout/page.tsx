"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useState, useEffect } from "react";

interface Product {
  _id: string;
  title: string;
  price: number;
  imageUrl: string;
}

export default function CheckoutPage() {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [discount, setDiscount] = useState<number>(0);
  const [paymentMethod, setPaymentMethod] = useState<string>("");
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    city: "",
    phone: "",
    email: "",
  });

  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    city: false,
    phone: false,
    email: false,
  });

  const [, setFormErrorMessage] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("cart");
      if (savedCart) {
        setCartItems(JSON.parse(savedCart));
      }

      const appliedDiscount = localStorage.getItem("appliedDiscount");
      if (appliedDiscount) {
        setDiscount(Number(appliedDiscount));
      }
    }
  }, []);

  const subtotal = cartItems.reduce((total, item) => total + item.price, 0);
  const total = Math.max(subtotal - discount, 0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value,
    });
  };

  const validateForm = () => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const errors = {
      firstName: !formValues.firstName,
      lastName: !formValues.lastName,
      city: !formValues.city,
      phone: !formValues.phone,
      email: !formValues.email || !emailPattern.test(formValues.email),
    };
    setFormErrors(errors);
    return Object.values(errors).every((error) => !error) && paymentMethod;
  };

  const handlePlaceOrder = () => {
    if (validateForm()) {
      localStorage.removeItem("appliedDiscount");
      localStorage.removeItem("cart");
      alert(`✅ Order Placed Successfully!\n\n📌 Payment Method: ${paymentMethod}\n💰 Total Amount: $${total.toFixed(2)}\n🚚 Your order will be delivered soon!`);
    } else {
      setFormErrorMessage("Please fill in all the fields and select a payment method.");
    }
  };

  return (
    <>
      <Navbar />
      <Header />
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white border rounded-lg p-6 space-y-4">
              <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
              {cartItems.map((item) => (
                <div key={item._id} className="flex items-center gap-4 py-3 border-b">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    width={64}
                    height={64}
                    className="rounded-md"
                    unoptimized={true}
                  />
                  <div>
                    <h3 className="text-sm font-medium">{item.title}</h3>
                    <p className="text-xs text-gray-500">Price: ${item.price.toFixed(2)}</p>
                  </div>
                </div>
              ))}
              <div className="text-right pt-4">
                <p className="text-sm">Total: ${total.toFixed(2)}</p>
              </div>
            </div>
            
            <div className="bg-white border rounded-lg p-6 space-y-6">
              <h2 className="text-xl font-semibold">Billing Information</h2>
              <div className="space-y-4">
                <input type="text" id="firstName" placeholder="First Name" className="w-full p-2 border rounded" value={formValues.firstName} onChange={handleInputChange} />
                <input type="text" id="lastName" placeholder="Last Name" className="w-full p-2 border rounded" value={formValues.lastName} onChange={handleInputChange} />
                <input type="text" id="city" placeholder="City" className="w-full p-2 border rounded" value={formValues.city} onChange={handleInputChange} />
                <input type="tel" id="phone" placeholder="Phone Number" className="w-full p-2 border rounded" value={formValues.phone} onChange={handleInputChange} />
                <input type="email" id="email" placeholder="Email Address" className="w-full p-2 border rounded" value={formValues.email} onChange={handleInputChange} />
              </div>
              
              <div>
                <label className="block font-medium">Payment Method</label>
                <select className="w-full p-2 border rounded mt-1" value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
                  <option value="">Select Payment Method</option>
                  <option value="Credit Card">Credit Card</option>
                  <option value="PayPal">PayPal</option>
                </select>
              </div>
              
              <button className="w-full h-12 bg-blue-500 hover:bg-blue-700 text-white rounded-md" onClick={handlePlaceOrder}>Place Order</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
