"use client";

import { Button } from "@/components/ui/button";
import FadeScaleTransition from "@/components/ui/fade-scale-transition";
import { OutlineDetail } from "@/components/ui/outline_detail";
import api from "@/src/api/axios";
import { useRouter } from "next/navigation";
import { useState, useMemo } from "react";

export default function InfoPage() {
    const router = useRouter();
    const [isVisible, setIsVisible] = useState(true);

    // 📅 날짜 계산 로직 (리렌더링 시마다 계산되지 않도록 useMemo 사용)
    const minDateStr = useMemo(() => {
        const date = new Date();
        date.setDate(date.getDate() + 3); // 오늘로부터 3일 더하기
        return date.toISOString().split("T")[0]; // YYYY-MM-DD 형식으로 변환
    }, []);

    // 기본값을 7일 후 날짜로 설정
    const [selectedDate, setSelectedDate] = useState(minDateStr);

    const handleStart = async () => {
        if (!selectedDate) {
            alert("다짐이 도착할 날짜를 선택해주세요.");
            return;
        }

        const seed = crypto.randomUUID();
        const formData = {
            uniqueLink: seed,
            expirationDate: selectedDate,
        };

        try {
            const response = await api.post(`makeForm`, formData);
            setIsVisible(false); // 1. 폼이 스르륵 사라짐

            setTimeout(() => {
                router.push(`/form/${seed}`);
            }, 500);
        } catch (error) {
            console.error("실패:", error);
        }
    };

    return (
        <div className="relative z-10 flex items-center justify-center min-h-screen">
            <FadeScaleTransition
                show={isVisible}
                className="w-full max-w-md p-8 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 shadow-2xl relative"
            >
                <div className="flex flex-col space-y-6">
                    <div className="space-y-2">
                        <label className="text-white/70 text-sm font-light ml-1">
                            캡슐을 열어볼 날짜 (최소 3일 이후)
                        </label>
                        <input
                            type="date"
                            // 💡 핵심 1: 오늘+3일 이전은 선택 불가능하게 설정
                            min={minDateStr}
                            // 💡 핵심 2: 초기 상태값을 오늘+7일로 설정
                            value={selectedDate}
                            onChange={(e) => setSelectedDate(e.target.value)}
                            className="w-full p-4 bg-white/5 border border-white/20 rounded-xl text-white outline-none focus:border-white/40 transition-all cursor-pointer [color-scheme:dark]"
                        />
                        <p className="text-[10px] text-white/40 ml-1">
                            * 다짐 캡슐은 최소 3일의 숙성 기간이 필요합니다.
                        </p>
                    </div>

                    <div className="pt-2">
                        <Button
                            onClick={handleStart}
                            className="w-full py-6 text-base font-light tracking-wider bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-lg cursor-pointer"
                            variant="ghost"
                        >
                            다짐 캡슐 만들기
                        </Button>
                    </div>
                </div>

                <OutlineDetail />
            </FadeScaleTransition>
        </div>
    );
}
