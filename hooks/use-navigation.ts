import { useState } from "react";
import { useSmoothScroll } from "./use-smooth-scroll";

export function useNavigation() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { smoothScroll: baseSmoothScroll } = useSmoothScroll();

    const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
        setIsMobileMenuOpen(false);
        baseSmoothScroll(e, targetId);
    };

    return {
        isMobileMenuOpen,
        setIsMobileMenuOpen,
        smoothScroll
    };
}
