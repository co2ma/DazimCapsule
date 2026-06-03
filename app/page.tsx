"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import FadeScaleTransition from "@/components/ui/fade-scale-transition";
import { OutlineDetail } from "@/components/ui/outline_detail";

export default function DreamPage() {
    const [isVisible, setIsVisible] = useState(true); // 나가는 상태 대신 '보임' 상태로 관리

    const router = useRouter();
    const handleStart = () => {
        setIsVisible(false); // 애니메이션 시작 (사라짐)

        setTimeout(() => {
            router.push(`/makeForm`);
        }, 500);
    };

    return (
        <div className="relative min-h-screen w-full overflow-hidden">
            <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
                <FadeScaleTransition
                    show={isVisible}
                    className="w-full max-w-md p-8 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 shadow-2xl relative"
                >
                    <div className="text-center space-y-6">
                        <h1 className="text-2xl md:text-3xl font-light text-white tracking-wide">
                            밤하늘 아래, 다짐 캡슐
                        </h1>
                        <p className="text-white/80 text-sm md:text-base leading-relaxed font-light">
                            마음속으로만 했던 다짐 <br />
                            전하지 못했던 진심 <br />
                            이루고자 하는 목표 <br />
                            <span className="text-white/60 text-xs mt-2 block">
                                모든 소망을 다짐 캡슐에 담아 <br />
                                미래의 우리에게.
                            </span>
                        </p>
                        <div className="pt-4">
                            <Button
                                onClick={handleStart}
                                className="w-full py-6 text-base font-light tracking-wider bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-lg cursor-pointer"
                                variant="ghost"
                            >
                                여정을 시작하기
                            </Button>
                        </div>
                    </div>

                    <OutlineDetail />
                </FadeScaleTransition>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-black/40 to-transparent pointer-events-none" />
        </div>
    );
}
