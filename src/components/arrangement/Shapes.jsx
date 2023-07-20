import React from 'react';
import { Card } from './Card';

export const CircleShape = () => {
  return (
    <div className='absolute w-8 h-8 bg-blue-500 rounded-full'>
    </div>
  )
};

export const SquareShape = () => {
    return (
        <div className='absolute w-8 h-8 bg-red-500'></div>
    )
}


// // export const LeftShapeCard = () => {
// //     return (
// //         <Card>
// //           <CircleShape style={{top : "50%", left: "5%"}}/>
// //         </Card>
// //     )
// // };

// // export const RightShapeCard = () => {
// //     return (
// //         <Card>
// //             <SquareShape style={{ top: "50%", right:"5%"}}/>
// //         </Card>
// //     )
// // };

// export const TopShapeCard = () => {
//      return (
//         <Card>
//             <CircleShape style={{top: "5%" , left:"50%"}}/>
//         </Card>
//      )
// };


// export const BottomShapeCard = () => {
//     return (
//         <Card>
//             <SquareShape style={{bottom : "5%", right:"50%"}}/>
//         </Card>

//     )
// }



export const BigCard = () => {
    return (
        <Card>
            <CircleShape style={{top:"50%", left:"5%"}}/>
            <SquareShape style={{top:"50%", right:"5%"}}/>
            <CircleShape style={{top:"5%", left:"50%"}}/>
            <SquareShape style={{bottom: "5%", right:"50%"}}/>
        </Card>
    )
}


