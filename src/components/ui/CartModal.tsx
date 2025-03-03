import { useCart } from "@/context/CartContext";
import { Button } from "./button";

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CartModal({ isOpen, onClose }: CartModalProps) {
  const { cartItems, removeFromCart } = useCart();

  if (!isOpen) return null;

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="fixed inset-0 z-50" onClick={onClose}>
      <div 
        className="absolute right-4 top-[8rem] w-80 bg-white rounded-lg shadow-lg border border-gray-100 font-inter"
        onClick={e => e.stopPropagation()}
      >
        <div className="p-3 border-b border-gray-100">
          <h2 className="text-sm font-medium">Your Cart ({cartItems.length})</h2>
        </div>

        <div className="max-h-[280px] overflow-y-auto">
          {cartItems.length === 0 ? (
            <p className="text-center text-sm text-gray-500 py-4">Your cart is empty</p>
          ) : (
            <div className="p-2">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-3 py-2 border-b border-gray-50 last:border-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium truncate">{item.name}</h3>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Color: <span style={{ color: item.color }}>{item.color}</span>
                    </p>
                    <div className="flex justify-between items-center mt-1">
                      <p className="text-sm">৳{item.price} × {item.quantity}</p>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-xs text-red-500 hover:text-red-700"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="p-3 border-t border-gray-100">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-medium">Total:</span>
              <span className="text-sm font-bold">৳{total}</span>
            </div>
            <Button
              className="w-full bg-[#0F5F38] hover:bg-[#0F5F38]/90 text-white text-sm h-9"
              onClick={() => window.location.href = 'https://rnd.devevenboat.com/carts'}
            >
              Buy Now
            </Button>
          </div>
        )}
      </div>
    </div>
  );
} 