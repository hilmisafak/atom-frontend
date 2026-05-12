import { MessageCircle, Phone } from "lucide-react";

function MobileActionBar() {
    return (
        <div className="fixed bottom-0 left-0 z-50 grid w-full grid-cols-2 border-t border-white/10 bg-zinc-950 p-3 lg:hidden">
            <a
                href="tel:+905534145451"
                className="flex items-center justify-center gap-2 rounded-xl bg-red-600 py-3 font-bold text-white"
            >
                <Phone size={18} />
                Ara
            </a>

            <a
                href="https://wa.me/905534145451"
                target="_blank"
                rel="noreferrer"
                className="ml-3 flex items-center justify-center gap-2 rounded-xl bg-green-600 py-3 font-bold text-white"
            >
                <MessageCircle size={18} />
                WhatsApp
            </a>
        </div>
    );
}

export default MobileActionBar;