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
