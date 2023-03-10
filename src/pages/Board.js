import BoardFeedbackCard from "../components/BoardFeedbackCard"
import EmptyShare from "../components/EmptyShare";
import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const Board = ({ champData }) => {


    // 공유하기 버튼으로 넘어온 데이터를 받기 위한 코드
    let shareList;
    if (localStorage.getItem('shareData') !== null) {
        shareList = JSON.parse(localStorage.shareData)
        shareList.reverse();
    }

    //반응형으로 높이를 변경해주기 위한 코드
    let CheckHeight;
    if (localStorage.getItem('shareData') !== null) {
        CheckHeight = shareList.length;
    }

    let count = Math.floor(CheckHeight / 5)

    let height = 100
    if (CheckHeight > 1) {
        height = height + 68 * CheckHeight + count * 10
    }
    const backImgHeight = { height: `${height}vh` }

    return (
        <>
            <div className="board">
                {shareList !== undefined ?
                    shareList.map(shareChampData => <BoardFeedbackCard shareChampData={shareChampData} champData={champData}
                        key={uuidv4()} />)
                    :
                    <EmptyShare />}
            </div>
            <div className="back_img" id="board_back" style={backImgHeight}>
            </div>
        </>
    )
}

export default React.memo(Board)