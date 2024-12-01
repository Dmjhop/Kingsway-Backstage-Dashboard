// ? API CALL FOR STAGE LAYOUT

import defaultLayoutImg from "@/public/No Current Layout.png"

const myHeaders = new Headers()
myHeaders.append("Authorization", process.env.API_SECRET)

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
  // cache: "force-cache",
}

let attachmentData
let trueAttachment

export async function getLayout(currentService) {
  const res = await fetch(
    `https://api.planningcenteronline.com/services/v2/service_types/285406/plans/${currentService.data[0].id}/attachments.data[0]`,
    requestOptions
  )
  attachmentData = await res.json()
  trueAttachment = attachmentData.data[0].attributes.thumbnail_url
  if (!res.ok) {
    trueAttachment = defaultLayoutImg
  } else {
    return trueAttachment
  }
}

// // ? API CALL FOR STAGE LAYOUT
// try {
//     const response = await fetch(
//       `https://api.planningcenteronline.com/services/v2/service_types/285406/plans/${currentService.data[0].id}/attachments.data[0]`,
//       requestOptions
//     )
//     attachmentData = await response.json()
//     // console.log(attachmentData.data[0].attributes.thumbnail_url)
//     trueAttachment = attachmentData.data[0].attributes.thumbnail_url
//   } catch (error) {
//     trueAttachment = defaultLayoutImg
//     console.error(error)
//   }
