import React from "react";
import MemberImg from "./PicturePage.MemberDecoPage.MemberImg";

import member from "@/assets/images/PicturePage/member3.png"

function MemberDropArea({ wrapperRef, imgRef, decorations, onDrop, onDragOver }) {
    return (
        <div
            ref={wrapperRef}
            onDrop={onDrop}
            onDragOver={onDragOver}
            style={{
                position: "relative",
                width: "fit-content",
                margin: "0 auto",
            }}
        >
            <MemberImg imgRef={imgRef} imgSrc={member} />

            {decorations.map((deco, index) => (
                <img
                    key={index}
                    src={deco.imgSrc}
                    alt={`deco-${index}`}
                    style={{
                        position: "absolute",
                        top: deco.y,
                        left: deco.x,
                        width: "70px",
                        height: "70px",
                        pointerEvents: "none",
                    }}
                />
            ))}
        </div>
    );
}

export default MemberDropArea;