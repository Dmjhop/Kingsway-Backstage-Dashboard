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
  const serviceTypeId = process.env.SUNDAY_SERVICE_TYPE_ID

  const res = await fetch(
    `https://api.planningcenteronline.com/services/v2/service_types/${serviceTypeId}/plans/${currentService.data[0].id}/attachments.data[0]`,
    {
      ...requestOptions,
      next: { tags: [`dashboard-${serviceTypeId}`], revalidate: 60 },
    }
  )
  attachmentData = await res.json()

  if (
    !res.ok ||
    attachmentData === undefined ||
    attachmentData.data[0] === undefined ||
    attachmentData.data[0].attributes.thumbnail_url === undefined
  ) {
    trueAttachment = defaultLayoutImg
    return trueAttachment
  } else {
    trueAttachment = attachmentData.data[0].attributes.thumbnail_url
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
