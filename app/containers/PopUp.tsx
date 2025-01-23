"use client";

import { cn } from "@/app/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import React, {
  ComponentPropsWithoutRef,
  useEffect,
  useMemo,
  useState,
} from "react";
import notificationData from "@/app/data/notificationData.json";

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}

export function AnimatedListItem({ children }: { children: React.ReactNode }) {
  const animations = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1, originY: 0 },
    exit: { scale: 0, opacity: 0 },
    transition: { type: "spring", stiffness: 350, damping: 40 },
  };

  return (
    <motion.div {...animations} layout className="mx-auto w-full">
      {children}
    </motion.div>
  );
}

export interface AnimatedListProps extends ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
  delay?: number;
}

export const AnimatedList = React.memo(
  ({ children, className, delay = 1000, ...props }: AnimatedListProps) => {
    const [index, setIndex] = useState(0);
    const childrenArray = useMemo(
      () => React.Children.toArray(children),
      [children]
    );

    useEffect(() => {
      if (index < childrenArray.length - 1) {
        const timeout = setTimeout(() => {
          setIndex((prevIndex) => prevIndex + 1);
        }, delay);

        return () => clearTimeout(timeout);
      }
    }, [index, delay, childrenArray.length]);

    const itemsToShow = useMemo(() => {
      const result = childrenArray.slice(0, index + 1).reverse();
      return result;
    }, [index, childrenArray]);

    return (
      <div
        className={`flex flex-col items-center gap-4 ${className}`}
        {...props}
      >
        <AnimatePresence>
          {itemsToShow.map((item) => (
            <AnimatedListItem key={(item as React.ReactElement).key}>
              {item}
            </AnimatedListItem>
          ))}
        </AnimatePresence>
      </div>
    );
  }
);

AnimatedList.displayName = "AnimatedList";

const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-250 ease-in-out hover:scale-[113%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent  dark:[border:1px_solid_rgba(255,255,255,.4)] dark:[box-shadow:#e3d9dc]"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className=" min-w-[40px] flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg ">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">⌚{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export default function PopUp({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full flex-col overflow-hidden rounded-lg border bg-background p-6 md:shadow-xl",
        className
      )}
    >
      <AnimatedList>
        {notificationData.notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
}

// "use client";

// import { cn } from "@/app/lib/utils";
// import { AnimatePresence, motion } from "framer-motion";
// import React, {
//   ComponentPropsWithoutRef,
//   useEffect,
//   useMemo,
//   useState,
// } from "react";

// interface Item {
//   name: string;
//   description: string;
//   icon: string;
//   color: string;
//   time: string;
// }

// let notifications = [
//   {
//     name: "Payment received",
//     description: "Magic UI",
//     time: "15m ago",
//     icon: "💸",
//     color: "#00C9A7",
//   },
//   {
//     name: "User signed up",
//     description: "Magic UI",
//     time: "10m ago",
//     icon: "👤",
//     color: "#FFB800",
//   },
//   {
//     name: "New message",
//     description: "Magic UI",
//     time: "5m ago",
//     icon: "💬",
//     color: "#FF3D71",
//   },
//   {
//     name: "New event",
//     description: "Magic UI",
//     time: "2m ago",
//     icon: "🗞️",
//     color: "#1E86FF",
//   },
// ];

// notifications = Array.from({ length: 10 }, () => notifications).flat();

// export function AnimatedListItem({ children }: { children: React.ReactNode }) {
//   const animations = {
//     initial: { scale: 0, opacity: 0 },
//     animate: { scale: 1, opacity: 1, originY: 0 },
//     exit: { scale: 0, opacity: 0 },
//     transition: { type: "spring", stiffness: 350, damping: 40 },
//   };

//   return (
//     <motion.div {...animations} layout className="mx-auto w-full">
//       {children}
//     </motion.div>
//   );
// }

// export interface AnimatedListProps extends ComponentPropsWithoutRef<"div"> {
//   children: React.ReactNode;
//   delay?: number;
// }

// export const AnimatedList = React.memo(
//   ({ children, className, delay = 1000, ...props }: AnimatedListProps) => {
//     const [index, setIndex] = useState(0);
//     const childrenArray = useMemo(
//       () => React.Children.toArray(children),
//       [children]
//     );

//     useEffect(() => {
//       if (index < childrenArray.length - 1) {
//         const timeout = setTimeout(() => {
//           setIndex((prevIndex) => prevIndex + 1);
//         }, delay);

//         return () => clearTimeout(timeout);
//       }
//     }, [index, delay, childrenArray.length]);

//     const itemsToShow = useMemo(() => {
//       const result = childrenArray.slice(0, index + 1).reverse();
//       return result;
//     }, [index, childrenArray]);

//     return (
//       <div
//         className={`flex flex-col items-center gap-4 ${className}`}
//         {...props}
//       >
//         <AnimatePresence>
//           {itemsToShow.map((item) => (
//             <AnimatedListItem key={(item as React.ReactElement).key}>
//               {item}
//             </AnimatedListItem>
//           ))}
//         </AnimatePresence>
//       </div>
//     );
//   }
// );

// AnimatedList.displayName = "AnimatedList";

// const Notification = ({ name, description, icon, color, time }: Item) => {
//   return (
//     <figure
//       className={cn(
//         "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
//         // animation styles
//         "transition-all duration-200 ease-in-out hover:scale-[103%]",
//         // light styles
//         "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
//         // dark styles
//         "transform-gpu dark:bg-transparent dark:backdrop-blur-md "
//       )}
//     >
//       <div className="flex flex-row items-center gap-3">
//         <div
//           className="flex size-10 items-center justify-center rounded-2xl"
//           style={{
//             backgroundColor: color,
//           }}
//         >
//           <span className="text-lg">{icon}</span>
//         </div>
//         <div className="flex flex-col overflow-hidden">
//           <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
//             <span className="text-sm sm:text-lg">{name}</span>
//             <span className="mx-1">·</span>
//             <span className="text-xs text-gray-500">{time}</span>
//           </figcaption>
//           <p className="text-sm font-normal dark:text-white/60">
//             {description}
//           </p>
//         </div>
//       </div>
//     </figure>
//   );
// };

// export default function PopUp({ className }: { className?: string }) {
//   return (
//     <div
//       className={cn(
//         "relative flex h-[500px] w-full flex-col overflow-hidden rounded-lg border bg-background p-6 md:shadow-xl",
//         className
//       )}
//     >
//       <AnimatedList>
//         {notifications.map((item, idx) => (
//           <Notification {...item} key={idx} />
//         ))}
//       </AnimatedList>
//     </div>
//   );
// }
