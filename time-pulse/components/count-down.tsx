// main file 

"use client"; 
import { useState, useRef, useEffect, ChangeEvent } from "react"; 
import { Button } from "./ui/button"; 
import { Input } from "./ui/input";

// the time user sets
const [duration, setDuration] = useState<number | string>("");

// time left
const [timeLeft, setTimeLeft] = useState<number>(0);

// prompts if the timer is running
const [isActive, setIsActive] = useState<boolean>(false);

// shows if the timer is paused
const [isPaused, setIsPaused] = useState<boolean>(false);

// stores the ID to let the dev control interval.
const timerRef = useRef<NodeJS.Timeout | null>(null);


// functions to control timer.

// this function clears any existing interval 
// and ensures the timer is not actve/paused, 
// and sets a time to start timer.

const handleSetDuration = (): void => {

    // if the type of duration is a number which is greater than 0...
    if (typeof duration === "number" && duration > 0 ) {
        // ..Run this piece of code.

        setTimeLeft(duration);
        setIsActive(false);
        setIsPaused(false);
        if (timerRef.current) {
            clearInterval(timerRef.current)
        }
    }
};

// activates the timer.
const start = ():void => {
    if (timeLeft>0){
        setIsActive(true);
        setIsPaused(false);
    }
}


// this function will handles pause behvior of the code,
const pause = ():void => {
    if (isActive) {
        setIsPaused(true);
        setIsActive(false);
        if (timerRef.current) {
            clearInterval(timerRef.current);
        }
    }
};

// this function will handle reset behaviour:
const reset = ():void => {
    setIsActive(false);
    setIsPaused(false);
    setTimeLeft(typeof duration === "number" ? duration : 0);
    if (timerRef.current) {
        clearInterval(timerRef.current);
    }
};


// useEffect to start a timer that decreases time left every second when active and not paused.
// Clears the timer on component update or unmount to prevent memory leaks.

useEffect(() => {
    if (isActive && !isPaused) {
        timerRef.current = setInterval(() => {
            setTimeLeft((prevTimeLeft) => {
                if (prevTimeLeft <= 1) {
                    clearInterval(timerRef.current!);
                    return 0;
                }
                return prevTimeLeft - 1;
            });
        }, 1000);
    }
    return () => {
        if (timerRef.current) {
            clearInterval(timerRef.current);
        }
    };
}, [isActive, isPaused]);

// It calculates the minutes and seconds, 
// then ensures they are displayed with two digits.
const format = (time: number) : string => {
    const minutes = Math.floor(time/60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
};


// this function updates when user changes the input value.
// it ensures the input is a number.

const durationChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setDuration(Number(e.target.value) || "");
};


// Structure of the UI