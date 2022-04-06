import MainContainer from "../components/container/main-container";

const Members = () => {
    return (
        <MainContainer>
            <p className='text-2xl'>FE Team Members</p>
            <div className="flex flex-row gap-5 mt-5">
                <div className="flex flex-col basis-1/3 justify-center">
                    <img className="rounded-md" src="src/assets/images/cat.jpeg" alt="stock-image"/>
                    <div>
                        <p className="text-lg font-medium">Kitty</p>
                        <p className="text-lg font-medium text-purple-800">Frontend Developer</p>
                        <div className="flex flex-row social-links"></div>
                    </div>
                </div>
                <div className="flex flex-col basis-1/3 justify-center">
                    <img className="rounded-md" src="src/assets/images/cat.jpeg" alt="stock-image"/>
                    <div>
                        <p className="text-lg font-medium">Kitty</p>
                        <p className="text-lg font-medium text-purple-800">Frontend Developer</p>
                        <div className="flex flex-row social-links"></div>
                    </div>
                </div>
                <div className="flex flex-col basis-1/3 justify-center">
                    <img className="rounded-md" src="src/assets/images/cat.jpeg" alt="stock-image"/>
                    <div>
                        <p className="text-lg font-medium">Kitty</p>
                        <p className="text-lg font-medium text-purple-800">Frontend Developer</p>
                        <div className="flex flex-row social-links"></div>
                    </div>
                </div>
            </div>
        </MainContainer>
    );
};

export default Members;
