"use client"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { Clock, Calendar as CalendarIcon, CheckCircle2, ChevronRight, User, Video } from "lucide-react"

// Mock available times for now
const TIME_SLOTS = [
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
]

export function BookingWidget() {
    const [date, setDate] = useState<Date | undefined>(new Date())
    const [selectedTime, setSelectedTime] = useState<string | null>(null)
    const [isBooked, setIsBooked] = useState(false)

    const handleBook = () => {
        if (!date || !selectedTime) return
        setIsBooked(true)
    }

    if (isBooked) {
        return (
            <div className="w-full max-w-md mx-auto p-8 rounded-3xl border border-border/50 bg-background/50 backdrop-blur-xl shadow-2xl animate-in fade-in zoom-in duration-500">
                <div className="flex flex-col items-center text-center space-y-6">
                    <div className="relative">
                        <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
                        <div className="relative h-20 w-20 bg-gradient-to-tr from-primary to-primary/50 text-primary-foreground rounded-full flex items-center justify-center shadow-lg">
                            <CheckCircle2 className="h-10 w-10" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tight">Confirmed!</h2>
                        <p className="text-muted-foreground">You are all set for</p>
                    </div>

                    <div className="w-full bg-muted/30 rounded-2xl p-4 border border-border/50 space-y-3">
                        <div className="flex items-center gap-3">
                            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <CalendarIcon className="h-4 w-4" />
                            </div>
                            <div className="text-left">
                                <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Date</p>
                                <p className="font-medium">{date ? format(date, "EEEE, MMMM do, yyyy") : ""}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <Clock className="h-4 w-4" />
                            </div>
                            <div className="text-left">
                                <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Time</p>
                                <p className="font-medium">{selectedTime}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <Video className="h-4 w-4" />
                            </div>
                            <div className="text-left">
                                <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Location</p>
                                <p className="font-medium">Google Meet</p>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={() => {
                            setIsBooked(false)
                            setSelectedTime(null)
                            setDate(new Date())
                        }}
                        className="text-sm font-medium text-primary hover:text-primary/80 transition-colors flex items-center gap-1"
                    >
                        <ChevronRight className="h-3 w-3 rotate-180" />
                        Book another meeting
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="w-full max-w-5xl mx-auto">
            <div className="grid grid-cols-1 items-center md:grid-cols-12 gap-6 bg-card/40 backdrop-blur-sm border rounded-3xl shadow-2xl overflow-hidden min-h-[600px]">

                {/* Left Panel: Context & Calendar */}
                <div className="md:col-span-5 lg:col-span-4 bg-muted/10 p-6 flex flex-col border-r border-border/50">
                    <div className="mb-8 space-y-1">
                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide">
                            1 Hour Session
                        </span>
                        <h2 className="text-2xl font-bold mt-4">Discovery Call</h2>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Let's discuss your project requirements, timeline, and how we can help you achieve your goals.
                        </p>
                    </div>

                    <div className="mt-auto">
                        <div className="flex items-center gap-2 mb-4 text-sm font-medium text-foreground/80">
                            <CalendarIcon className="w-4 h-4 text-primary" />
                            Select Date
                        </div>
                        <div className="p-0 sm:p-2 bg-background/50 rounded-xl border shadow-sm flex justify-center items-center">
                            <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                className="rounded-md"
                                disabled={(date) => date < new Date() || date.getDay() === 0 || date.getDay() === 6}
                            />
                        </div>
                    </div>
                </div>

                {/* Right Panel: Time Slots & Confirmation */}
                <div className="md:col-span-7 lg:col-span-8 p-6 md:p-8 flex flex-col bg-background/60">
                    <div className="mb-6 flex items-center justify-between">
                        <div>
                            <h3 className="text-xl font-semibold flex items-center gap-2">
                                <Clock className="w-5 h-5 text-primary" />
                                Available Times
                            </h3>
                            <p className="text-sm text-muted-foreground mt-1">
                                {date ? format(date, "EEEE, MMMM do") : "Select a date to view times"}
                            </p>
                        </div>
                        {date && (
                            <div className="hidden sm:block text-xs font-mono bg-muted px-2 py-1 rounded text-muted-foreground">
                                {Intl.DateTimeFormat().resolvedOptions().timeZone}
                            </div>
                        )}
                    </div>

                    <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
                        {date ? (
                            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 pb-4">
                                {TIME_SLOTS.map((time) => (
                                    <button
                                        key={time}
                                        onClick={() => setSelectedTime(time)}
                                        className={cn(
                                            "group relative flex items-center justify-center py-2 px-3 rounded-lg text-xs font-medium transition-all duration-300 border",
                                            selectedTime === time
                                                ? "bg-primary text-primary-foreground border-primary ring-2 ring-primary/20 shadow-md scale-100"
                                                : "bg-background hover:bg-muted/50 hover:border-primary/30 text-foreground border-input hover:shadow-sm hover:scale-[1.02]"
                                        )}
                                    >
                                        {time}
                                        {selectedTime === time && (
                                            <CheckCircle2 className="w-3 h-3 absolute right-1.5 opacity-50" />
                                        )}
                                    </button>
                                ))}
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center h-full text-muted-foreground space-y-4 opacity-50">
                                <CalendarIcon className="w-16 h-16 stroke-1" />
                                <p>Please select a date from the calendar</p>
                            </div>
                        )}
                    </div>

                    {/* Action Area */}
                    <div className="mt-6 pt-6 border-t border-border/50">
                        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                            <div className="text-sm text-muted-foreground">
                                {selectedTime ? (
                                    <span className="flex items-center gap-2">
                                        Selected: <span className="font-semibold text-foreground">{selectedTime}</span>
                                    </span>
                                ) : (
                                    <span>No time selected</span>
                                )}
                            </div>
                            <button
                                disabled={!date || !selectedTime}
                                onClick={handleBook}
                                className={cn(
                                    "w-full sm:w-auto px-8 py-3 rounded-xl font-semibold text-white transition-all duration-300 shadow-lg flex items-center justify-center gap-2",
                                    date && selectedTime
                                        ? "bg-primary hover:bg-primary/90 hover:shadow-primary/25 hover:-translate-y-0.5"
                                        : "bg-muted text-muted-foreground cursor-not-allowed shadow-none"
                                )}
                            >
                                Confirm Booking
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
