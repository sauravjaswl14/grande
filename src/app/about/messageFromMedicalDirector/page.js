import MessageFrom from "@/components/about/MessageFrom"
import Footer from "@/components/Footer"
import { MegaMenuWithHover } from "@/components/Navbar"
import Link from "next/link"

let content = ['A vast number of Nepali people travel abroad for better health services because they believe that healthcare of that quality is not possible in the hospital infrastructure present in Nepal. However, the people who are able to afford international health travel are only a small minority of the entire population of Nepalese who are still left with a dire need of a quality, patient-centric healthcare center of international standards at an affordable cost. Similarly, many young and newly trained nurses and doctors are bound to leave the country in search of better employment opportunities abroad. If such practitioners desired to work at an institution in Nepal that had the best infrastructure, and state-of-the-art equipment, which institution would they turn to?', 'Grande International Hospital was created with the vision to fill this existing void in the Nepali healthcare industry. It is dedicated to the seamless delivery of quality, patient-centric healthcare which means supplying everything a patient may need, from acute critical care to rehabilitation to transitional care to home healthcare services at an affordable cost. Our goal is to establish in this country a culture of continuous improvement in healthcare not only by providing excellent healthcare services but also by conducting community health education seminars, outreach programs, and wellness programs in several parts of Nepal.',
  'This has not been an easy year for any of us an earthquake of 7.8 magnitude in April followed by economic crisis as a result of cessation of entry of goods into the country has hit institutions and people likewise. However, even in such difficult situations, Grande International Hospital has not strayed away from its commitments and continues to provide its services to the Nepali people. This would not have been possible if our staff, well-wishers, and shareholders who have already demonstrated their commitment to contributing to the development of Nepal by investing their time, effort, and money in Grande had not stood beside us. My heartfelt gratitude goes out to all of you.',
  'In the future, I hope that Grande International Hospital can serve as a benchmark for the development of many healthcare institutions of international standards in different parts of Nepal. Until and beyond that, Grande will continue to be a hospital for the people of Nepal.', 'Wishing you the best of health.']

function Banner() {
  return <div className="p-10 flex items-center h-[300px] bg-[#184861] text-white font-semibold">
    <div className="flex space-x-3 items-center">
      <Link href="/about">About</Link>
      <p>{'>>'}</p>
      <Link href="/about/messageFromChairman">Message from Chairman</Link>
    </div>
  </div>
}

function MessageFromMedicalDirector() {
  return (
    <div>
      <MegaMenuWithHover />
      {/* <Banner /> */}
      <MessageFrom
        name={'Er. Deepak Kunwar'}
        designation={'Medical Director, Grande International Hospital.'}
        img={'/img/images/DR.-BINOD-BIJUKACHHE_-MEDICAL-DIRECTOR.jpeg'}
        title={'Message from Medical Director'}
        content={content}
      />
      <Footer />
    </div>
  )
}
export default MessageFromMedicalDirector