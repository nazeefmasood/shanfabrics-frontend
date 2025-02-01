import React, { useState } from "react";
import { products } from "../images/dummy_products";
import { LogOut, User, ShoppingBag, MapPin, Shield } from "lucide-react";

const UserAccount = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedOrder, setSelectedOrder] = useState(null);

  // Sample user data - in real app, this would come from your backend
  const userData = {
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    joinDate: "January 2024",
    orders: [
      {
        id: "ORD-2024-001",
        date: "Jan 15, 2024",
        total: "$245.00",
        status: "Delivered",
        shippingAddress: "123 Madison Avenue, New York, NY 10001",
        paymentMethod: "•••• •••• •••• 4242",
        tracking: "1Z999AA1234567890",
        items: [
          {
            name: "Black Cotton T-Shirt",
            price: "$45.00",
            quantity: 1,
            size: "M",
            color: "Black",
            image: "/api/placeholder/80/80",
          },
          {
            name: "Denim Jacket",
            price: "$200.00",
            quantity: 1,
            size: "L",
            color: "Blue",
            image: "/api/placeholder/80/80",
          },
        ],
      },
      {
        id: "ORD-2024-002",
        date: "Jan 28, 2024",
        total: "$178.50",
        status: "In Transit",
        shippingAddress: "456 Park Avenue, New York, NY 10022",
        paymentMethod: "•••• •••• •••• 5555",
        tracking: "1Z999BB1234567891",
        items: [
          {
            name: "Leather Boots",
            price: "$128.50",
            quantity: 1,
            size: "39",
            color: "Brown",
            image: "/api/placeholder/80/80",
          },
          {
            name: "Wool Scarf",
            price: "$50.00",
            quantity: 1,
            color: "Grey",
            image: "/api/placeholder/80/80",
          },
        ],
      },
    ],
    addresses: [
      {
        id: 1,
        type: "Primary",
        street: "123 Madison Avenue",
        city: "New York",
        state: "NY",
        zip: "10001",
      },
      {
        id: 2,
        type: "Work",
        street: "456 Park Avenue",
        city: "New York",
        state: "NY",
        zip: "10022",
      },
    ],
  };

  const OrderDetails = ({ order, onClose }) => (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-2xl">
          ×
        </button>

        <h3 className="font-fredoka text-2xl mb-6">Order Details</h3>

        <div className="space-y-8">
          {/* Order Summary */}
          <div className="grid grid-cols-2 gap-4 border-b-2 border-black pb-6">
            <div>
              <p className="text-sm uppercase tracking-wider mb-2">
                Order Number
              </p>
              <p className="font-bold">{order.id}</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-wider mb-2">
                Order Date
              </p>
              <p>{order.date}</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-wider mb-2">
                Total Amount
              </p>
              <p className="font-bold">{order.total}</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-wider mb-2">Status</p>
              <p>{order.status}</p>
            </div>
          </div>

          {/* Items */}
          <div>
            <h4 className="text-sm uppercase tracking-wider mb-4">Items</h4>
            <div className="space-y-4">
              {order.items.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-6 border-b border-gray-200 pb-4"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover"
                  />
                  <div className="flex-grow">
                    <p className="font-bold">{item.name}</p>
                    <p className="text-gray-600">Size: {item.size}</p>
                    <p className="text-gray-600">Color: {item.color}</p>
                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                  </div>
                  <p className="font-bold">{item.price}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Shipping Details */}
          <div>
            <h4 className="text-sm uppercase tracking-wider mb-4">
              Shipping Details
            </h4>
            <p>{order.shippingAddress}</p>
            {order.tracking && (
              <div className="mt-2">
                <p className="text-sm">Tracking Number:</p>
                <p className="font-mono">{order.tracking}</p>
              </div>
            )}
          </div>

          {/* Payment Details */}
          <div>
            <h4 className="text-sm uppercase tracking-wider mb-4">
              Payment Details
            </h4>
            <p>Card ending in {order.paymentMethod.slice(-4)}</p>
          </div>
        </div>
      </div>
    </div>
  );

  const sections = [
    {
      title: "Account Overview",
      id: "overview",
      content: [
        {
          subtitle: "Personal Information",
          text: (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-2xl font-bold">{userData.name}</p>
                  <p className="text-gray-600">{userData.email}</p>
                  <p className="text-sm text-gray-500">
                    Member since {userData.joinDate}
                  </p>
                </div>
                <button className="px-4 py-2 border-2 border-black hover:bg-black hover:text-white transition-colors">
                  Edit Profile
                </button>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="border-l-4 border-black p-6">
                  <p className="text-4xl font-bold mb-2">
                    {userData.orders.length}
                  </p>
                  <p className="text-sm uppercase tracking-wider">
                    Total Orders
                  </p>
                </div>
                <div className="border-l-4 border-black p-6">
                  <p className="text-4xl font-bold mb-2">
                    {userData.addresses.length}
                  </p>
                  <p className="text-sm uppercase tracking-wider">
                    Saved Addresses
                  </p>
                </div>
                <div className="border-l-4 border-black p-6">
                  <p className="text-4xl font-bold mb-2">0</p>
                  <p className="text-sm uppercase tracking-wider">
                    Active Returns
                  </p>
                </div>
              </div>
            </div>
          ),
        },
      ],
    },
    {
      title: "My Orders",
      id: "orders",
      content: [
        {
          subtitle: "Recent Orders",
          text: (
            <div className="space-y-6">
              {userData.orders.map((order, i) => (
                <div
                  key={order.id}
                  className="border-2 border-black p-6 relative hover:border-black/70 transition-colors"
                >
                  <div className="absolute -right-4 -top-4 bg-white px-4 text-sm uppercase tracking-wider border-2 border-black">
                    {order.status}
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="font-bold">{order.id}</p>
                      <p className="text-gray-600">{order.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">{order.total}</p>
                      <button
                        onClick={() => setSelectedOrder(order)}
                        className="text-sm underline"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="flex gap-4 overflow-x-auto">
                      {order.items.map((item, index) => (
                        <div key={index} className="flex-shrink-0">
                          <img
                            src={products[i].image[0]}
                            alt={item.name}
                            className="w-20 h-20 object-cover mb-2"
                          />
                          <p className="text-sm text-gray-600 w-20 truncate">
                            {item.name}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ),
        },
      ],
    },
    {
      title: "Addresses",
      id: "addresses",
      content: [
        {
          subtitle: "Saved Addresses",
          text: (
            <div className="space-y-6">
              <button className="w-full border-2 border-black p-4 text-left hover:bg-black hover:text-white transition-colors">
                + Add New Address
              </button>
              {userData.addresses.map((address) => (
                <div
                  key={address.id}
                  className="border-2 border-black p-6 relative"
                >
                  <div className="absolute -right-4 -top-4 bg-white px-4 text-sm uppercase tracking-wider border-2 border-black">
                    {address.type}
                  </div>
                  <div className="flex justify-between">
                    <div>
                      <p>{address.street}</p>
                      <p>
                        {address.city}, {address.state} {address.zip}
                      </p>
                    </div>
                    <div className="space-x-4">
                      <button className="underline">Edit</button>
                      <button className="underline text-red-600">Delete</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ),
        },
      ],
    },
    {
      title: "Privacy & Security",
      id: "privacy",
      content: [
        {
          subtitle: "Account Security",
          text: (
            <div className="space-y-6">
              <div className="border-2 border-black p-6">
                <p className="font-bold mb-4">Password & Authentication</p>
                <button className="px-4 py-2 border-2 border-black hover:bg-black hover:text-white transition-colors">
                  Change Password
                </button>
              </div>
              <div className="border-2 border-black p-6">
                <p className="font-bold mb-4">Delete Account</p>
                <p className="text-gray-600 mb-4">
                  This action cannot be undone. All your data will be
                  permanently deleted.
                </p>
                <button className="px-4 py-2 border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-colors">
                  Delete Account
                </button>
              </div>
            </div>
          ),
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white ">
      <div className="bg-black text-white py-4">
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <div>
            <p className="text-sm uppercase tracking-wider">Welcome back</p>
            <h2 className="text-2xl font-bold">{userData.name}</h2>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-white hover:bg-white hover:text-black transition-colors">
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        {/* Main Title */}
        <div className="mb-12">
          <h1 className="font-robson text-[120px] font-semibold text-black/90 leading-none">
            My Account
          </h1>
          <p className="text-lg mt-8 max-w-2xl">
            Manage your account settings and preferences
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-2 border-black mb-16 w-max">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveTab(section.id)}
              className={`px-8 py-4 font-fredoka uppercase text-lg transition-colors
                ${
                  activeTab === section.id
                    ? "bg-black text-white"
                    : "hover:bg-black/5"
                }`}
            >
              {section.title}
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div className="space-y-16">
          {sections
            .filter((section) => section.id === activeTab)
            .map((section, index) => (
              <div key={index} className="relative">
                <div className="flex">
                  <div className="w-full">
                    {section.content.map((item, itemIndex) => (
                      <div key={itemIndex} className="relative">
                        <div className="pl-12">
                          <div className=" border-black pt-8">{item.text}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Order Details Modal */}
      {selectedOrder && (
        <OrderDetails
          order={selectedOrder}
          onClose={() => setSelectedOrder(null)}
        />
      )}
    </div>
  );
};

export default UserAccount;
