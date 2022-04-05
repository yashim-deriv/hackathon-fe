import { HTMLAttributes } from "react";

const MainContainer = ({ children }: HTMLAttributes<HTMLDivElement>) => {
    return (
        <div className="flex justify-center w-full mt-12">
            <div className="w-11/12">{children}</div>
        </div>
    );
};

export default MainContainer;
