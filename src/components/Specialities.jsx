import Link from 'next/link';
import Tab from './Tab';
import Image from 'next/image';

function Speciality() {
  return (
    <article className='w-full lg:w-[374px] pb-6 border-b-1 border-[##B7B7B7]'>
      <div className='flex justify-between items-center'>
        {/*  */}
        <div className='flex space-x-5'>
          <div>
            <svg
              width='120'
              height='120'
              viewBox='0 0 120 120'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M33 22.5L23.5 24L22 25V27.5L23 33.5L24 37.5V43V49.5L23 54C22.6667 55.8333 22 59.6 22 60V70.5C22 71.5 23 73 23.5 73C23.9 73 25.3333 75.3333 26 76.5L27.5 78H31L35.5 77L37.5 75.5L39.5 70L40 66.5L41.5 62.5L42.5 59.5L44 56.5V54L42 52L39.5 50L37.5 47L35.5 45.5L35 42.5L34 38V35L35.5 31.5L36.5 28.5L36 25.5L34 23.5L33 22.5Z'
                fill='#184861'
              ></path>
              <path
                d='M39.8602 65.8231C39.8602 65.8231 42.1099 55.4719 48.4164 52.3246C54.7109 49.1773 55.1657 48.7226 55.1657 48.7226C55.1657 48.7226 56.5179 40.1664 61.0174 38.8261C65.517 37.4858 80.3677 37.9286 81.72 37.9286C83.0722 37.9286 84.8672 39.7236 85.322 42.8828C85.7767 46.0301 84.4245 48.7346 80.8225 48.7346H74.0732C74.0732 48.7346 73.6185 51.4391 74.0732 52.7793C74.5279 54.1316 84.8792 63.1306 89.3787 67.1754C93.8782 71.2202 95.6732 80.2311 94.7757 87.4232C93.8782 94.6272 92.0712 96.4222 92.0712 97.7745C92.0712 99.1267 92.0712 103.171 90.2762 104.524C88.4812 105.876 78.1299 107.228 63.7219 102.729C49.3259 98.2292 39.8721 91.4799 38.0652 89.2302C36.2701 86.9804 35.8154 85.1854 35.8154 85.1854C35.8154 85.1854 24.1119 79.7884 22.3169 72.5844C20.5218 65.3804 22.3169 55.9386 23.6691 50.5296C25.0214 45.1326 22.7716 34.7813 22.3169 29.8271C21.8621 24.8728 21.4194 22.623 28.1686 22.623C34.9179 22.623 35.3726 23.5206 35.8154 24.4181C36.2582 25.3156 37.1676 28.4628 37.1676 28.4628'
                stroke='#58595B'
                stroke-width='2'
                stroke-miterlimit='10'
                stroke-linecap='round'
              ></path>
              <path
                d='M71.8107 37.0207C71.8107 37.0207 70.0157 32.5211 69.561 31.6236C69.1063 30.7261 68.6635 30.2714 68.6635 30.2714C68.6635 30.2714 73.6177 28.4764 73.6177 27.1241C73.6177 25.7719 71.368 22.1699 69.573 20.8296C67.7779 19.4773 66.4257 18.5798 64.1759 20.8296L61.4714 23.5341C61.4714 23.5341 59.4012 22.8041 58.7669 22.6366C58.1207 22.4571 56.5172 22.1818 56.5172 22.1818C56.5172 22.1818 57.4147 16.7848 56.0625 15.8873C54.7102 14.9898 48.8585 14.9898 47.0634 15.4326C45.2684 15.8873 43.9162 16.7848 44.3589 18.5798C44.8137 20.3749 46.154 23.5341 46.154 23.5341C46.154 23.5341 42.552 24.4316 39.4047 26.6813C36.2574 28.9311 33.1102 35.2376 34.4504 40.6346C35.8027 46.0316 40.3022 51.4406 42.0972 52.7809C43.8922 54.1332 44.8017 55.0307 44.8017 55.0307'
                stroke='#58595B'
                stroke-width='2'
                stroke-miterlimit='10'
                stroke-linecap='round'
              ></path>
              <path
                d='M34.1995 36.2634C34.1995 36.2634 36.4969 44.4242 43.7004 42.6891C50.8919 40.966 50.856 34.2891 50.856 34.2891'
                stroke='#58595B'
                stroke-width='2'
                stroke-miterlimit='10'
                stroke-linecap='round'
              ></path>
              <path
                d='M22.9983 71.783C22.9983 71.783 25.2957 79.9437 32.4992 78.2086C39.6907 76.4856 39.6548 69.8086 39.6548 69.8086'
                stroke='#58595B'
                stroke-width='2'
                stroke-miterlimit='10'
                stroke-linecap='round'
              ></path>
              <path
                d='M83.0598 71.3652C83.0598 71.3652 86.6017 77.5636 86.159 84.2046C85.7162 90.8457 84.8308 93.0594 84.8308 93.0594'
                stroke='#58595B'
                stroke-width='2'
                stroke-miterlimit='10'
                stroke-linecap='round'
              ></path>
            </svg>
          </div>

          <p className='text-[#184861] text-[15px] font-medium'>Cardiac Care</p>
        </div>

        {/*  */}
        <div>
          <svg
            width='7'
            height='12'
            viewBox='0 0 7 12'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M1 0.999612L5.8 5.79961L1 10.5996'
              stroke='#58595B'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
            ></path>
          </svg>
        </div>
      </div>
    </article>
  );
}

function SpecialitiesSection() {
  return (
    <div className='lg:border-r-2 px-5'>
      <section className='flex flex-col'>
        {/* this is meant to be break into individual component i.e Speciality */}
        <article className='w-full lg:w-[374px] py-2 border-b-2 border-[##B7B7B7]'>
          <div className='flex justify-between items-center'>
            {/*  */}
            <div className='flex space-x-5 items-center'>
              <div>
                <svg
                  width='42'
                  height='42'
                  viewBox='0 0 120 120'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M33 22.5L23.5 24L22 25V27.5L23 33.5L24 37.5V43V49.5L23 54C22.6667 55.8333 22 59.6 22 60V70.5C22 71.5 23 73 23.5 73C23.9 73 25.3333 75.3333 26 76.5L27.5 78H31L35.5 77L37.5 75.5L39.5 70L40 66.5L41.5 62.5L42.5 59.5L44 56.5V54L42 52L39.5 50L37.5 47L35.5 45.5L35 42.5L34 38V35L35.5 31.5L36.5 28.5L36 25.5L34 23.5L33 22.5Z'
                    fill='#184861'
                  ></path>
                  <path
                    d='M39.8602 65.8231C39.8602 65.8231 42.1099 55.4719 48.4164 52.3246C54.7109 49.1773 55.1657 48.7226 55.1657 48.7226C55.1657 48.7226 56.5179 40.1664 61.0174 38.8261C65.517 37.4858 80.3677 37.9286 81.72 37.9286C83.0722 37.9286 84.8672 39.7236 85.322 42.8828C85.7767 46.0301 84.4245 48.7346 80.8225 48.7346H74.0732C74.0732 48.7346 73.6185 51.4391 74.0732 52.7793C74.5279 54.1316 84.8792 63.1306 89.3787 67.1754C93.8782 71.2202 95.6732 80.2311 94.7757 87.4232C93.8782 94.6272 92.0712 96.4222 92.0712 97.7745C92.0712 99.1267 92.0712 103.171 90.2762 104.524C88.4812 105.876 78.1299 107.228 63.7219 102.729C49.3259 98.2292 39.8721 91.4799 38.0652 89.2302C36.2701 86.9804 35.8154 85.1854 35.8154 85.1854C35.8154 85.1854 24.1119 79.7884 22.3169 72.5844C20.5218 65.3804 22.3169 55.9386 23.6691 50.5296C25.0214 45.1326 22.7716 34.7813 22.3169 29.8271C21.8621 24.8728 21.4194 22.623 28.1686 22.623C34.9179 22.623 35.3726 23.5206 35.8154 24.4181C36.2582 25.3156 37.1676 28.4628 37.1676 28.4628'
                    stroke='#58595B'
                    stroke-width='2'
                    stroke-miterlimit='10'
                    stroke-linecap='round'
                  ></path>
                  <path
                    d='M71.8107 37.0207C71.8107 37.0207 70.0157 32.5211 69.561 31.6236C69.1063 30.7261 68.6635 30.2714 68.6635 30.2714C68.6635 30.2714 73.6177 28.4764 73.6177 27.1241C73.6177 25.7719 71.368 22.1699 69.573 20.8296C67.7779 19.4773 66.4257 18.5798 64.1759 20.8296L61.4714 23.5341C61.4714 23.5341 59.4012 22.8041 58.7669 22.6366C58.1207 22.4571 56.5172 22.1818 56.5172 22.1818C56.5172 22.1818 57.4147 16.7848 56.0625 15.8873C54.7102 14.9898 48.8585 14.9898 47.0634 15.4326C45.2684 15.8873 43.9162 16.7848 44.3589 18.5798C44.8137 20.3749 46.154 23.5341 46.154 23.5341C46.154 23.5341 42.552 24.4316 39.4047 26.6813C36.2574 28.9311 33.1102 35.2376 34.4504 40.6346C35.8027 46.0316 40.3022 51.4406 42.0972 52.7809C43.8922 54.1332 44.8017 55.0307 44.8017 55.0307'
                    stroke='#58595B'
                    stroke-width='2'
                    stroke-miterlimit='10'
                    stroke-linecap='round'
                  ></path>
                  <path
                    d='M34.1995 36.2634C34.1995 36.2634 36.4969 44.4242 43.7004 42.6891C50.8919 40.966 50.856 34.2891 50.856 34.2891'
                    stroke='#58595B'
                    stroke-width='2'
                    stroke-miterlimit='10'
                    stroke-linecap='round'
                  ></path>
                  <path
                    d='M22.9983 71.783C22.9983 71.783 25.2957 79.9437 32.4992 78.2086C39.6907 76.4856 39.6548 69.8086 39.6548 69.8086'
                    stroke='#58595B'
                    stroke-width='2'
                    stroke-miterlimit='10'
                    stroke-linecap='round'
                  ></path>
                  <path
                    d='M83.0598 71.3652C83.0598 71.3652 86.6017 77.5636 86.159 84.2046C85.7162 90.8457 84.8308 93.0594 84.8308 93.0594'
                    stroke='#58595B'
                    stroke-width='2'
                    stroke-miterlimit='10'
                    stroke-linecap='round'
                  ></path>
                </svg>
              </div>

              <p className='text-[#184861] text-[15px] font-medium'>
                Cardiac Care
              </p>
            </div>

            {/*  */}
            <div>
              <svg
                width='7'
                height='12'
                viewBox='0 0 7 12'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M1 0.999612L5.8 5.79961L1 10.5996'
                  stroke='#58595B'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                ></path>
              </svg>
            </div>
          </div>
        </article>
        <article className='w-full lg:w-[374px] py-2 border-b-2 border-[##B7B7B7]'>
          <div className='flex justify-between items-center'>
            {/*  */}
            <div className='flex space-x-5 items-center'>
              <div>
                <svg
                  width='42'
                  height='42'
                  viewBox='0 0 120 120'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M63.1504 49.7383H62.1504L61.1504 50.2383L59.6504 52.2383L60.1504 55.2383C60.3171 55.2383 60.7504 55.1383 61.1504 54.7383C61.6504 54.2383 61.6504 54.7383 62.1504 54.2383L63.1504 53.2383C63.6504 52.7383 63.6504 53.2383 63.6504 52.7383V51.7383L63.1504 50.7383V49.7383Z'
                    fill='#184861'
                  ></path>
                  <path
                    d='M30.8074 71.4883C30.8074 71.4883 26.6871 74.1029 25.7183 77.3361C24.7261 80.6394 25.835 84.0477 25.835 84.0477'
                    stroke='#58595B'
                    stroke-width='1.12'
                    stroke-miterlimit='10'
                    stroke-linecap='round'
                  ></path>
                  <path
                    d='M89.5542 47.6065C89.5542 47.6065 93.908 45.4121 95.1919 42.2956C96.4992 39.0974 95.7405 35.6074 95.7405 35.6074'
                    stroke='#58595B'
                    stroke-width='1.12'
                    stroke-miterlimit='10'
                    stroke-linecap='round'
                  ></path>
                  <path
                    d='M60.0812 107.055C68.5905 107.055 75.4887 86.0003 75.4887 60.0276C75.4887 34.055 68.5905 13 60.0812 13C51.572 13 44.6738 34.055 44.6738 60.0276C44.6738 86.0003 51.572 107.055 60.0812 107.055Z'
                    stroke='#58595B'
                    stroke-width='2'
                    stroke-miterlimit='10'
                    stroke-linecap='round'
                  ></path>
                  <path
                    d='M100.018 84.8593C104.509 77.6321 90.2676 60.6594 68.2079 46.9499C46.1483 33.2403 24.6243 27.9854 20.1327 35.2127C15.6412 42.44 29.8829 59.4126 51.9425 73.1222C74.0021 86.8317 95.5261 92.0866 100.018 84.8593Z'
                    stroke='#58595B'
                    stroke-width='2'
                    stroke-miterlimit='10'
                    stroke-linecap='round'
                  ></path>
                  <path
                    d='M68.5131 72.9289C90.2561 58.7224 104.109 41.431 99.4546 34.3075C94.8002 27.184 73.401 32.9259 51.6581 47.1323C29.9152 61.3388 16.0622 78.6302 20.7166 85.7537C25.371 92.8772 46.7702 87.1354 68.5131 72.9289Z'
                    stroke='#58595B'
                    stroke-width='2'
                    stroke-miterlimit='10'
                    stroke-linecap='round'
                  ></path>
                  <path
                    d='M56.7312 60.1439C55.8324 58.9183 55.1555 57.9845 54.9103 57.611C53.8948 56.0469 54.992 53.4674 55.3656 52.5686C55.6457 51.8799 56.8363 49.6855 56.8363 49.6855'
                    stroke='#58595B'
                    stroke-miterlimit='10'
                    stroke-linecap='round'
                  ></path>
                  <path
                    d='M63.023 60.1562C65.5208 62.8175 68.3689 65.969 68.3689 65.969L64.8438 71.1515C64.8438 71.1515 62.346 67.7899 59.8364 64.3933'
                    stroke='#58595B'
                    stroke-miterlimit='10'
                    stroke-linecap='round'
                  ></path>
                  <path
                    d='M63.2212 49.5809C63.2212 49.5809 63.3613 50.1294 63.2796 50.9232C63.1862 51.8569 62.9061 52.5573 60.7467 55.347C58.5873 58.1366 51.3271 65.5252 51.3271 65.5252L55.3307 70.4392C55.3307 70.4392 64.9254 58.2884 65.1238 57.2962C65.3105 56.3041 64.6802 52.1488 64.085 50.9699C63.478 49.7909 62.6726 48.2152 59.9063 48.2385C58.2722 48.2502 57.3384 48.8805 56.9182 49.7092C56.8598 49.826 56.8131 49.9544 56.7664 50.0828C56.6147 50.573 56.6264 51.1216 56.7664 51.6352C57.0349 52.674 58.3305 54.6349 59.9296 56.6426'
                    fill='#184861'
                  ></path>
                  <path
                    d='M63.2212 49.5809C63.2212 49.5809 63.3613 50.1294 63.2796 50.9232C63.1862 51.8569 62.9061 52.5573 60.7467 55.347C58.5873 58.1366 51.3271 65.5252 51.3271 65.5252L55.3307 70.4392C55.3307 70.4392 64.9254 58.2884 65.1238 57.2962C65.3105 56.3041 64.6802 52.1488 64.085 50.9699C63.478 49.7909 62.6726 48.2152 59.9063 48.2385C58.2722 48.2502 57.3384 48.8805 56.9182 49.7092C56.8598 49.826 56.8131 49.9544 56.7664 50.0828C56.6147 50.573 56.6264 51.1216 56.7664 51.6352C57.0349 52.674 58.3305 54.6349 59.9296 56.6426'
                    stroke='#58595B'
                    stroke-miterlimit='10'
                    stroke-linecap='round'
                  ></path>
                </svg>
              </div>

              <p className='text-[#184861] text-[15px] font-medium'>
                Cancer Care
              </p>
            </div>

            {/*  */}
            <div>
              <svg
                width='7'
                height='12'
                viewBox='0 0 7 12'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M1 0.999612L5.8 5.79961L1 10.5996'
                  stroke='#58595B'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                ></path>
              </svg>
            </div>
          </div>
        </article>
        <article className='w-full lg:w-[374px] py-2 border-b-2 border-[##B7B7B7]'>
          <div className='flex justify-between items-center'>
            {/*  */}
            <div className='flex space-x-5 items-center'>
              <div>
                <svg
                  width='42'
                  height='42'
                  viewBox='0 0 120 120'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M37.5 102.5H26.5C26.8333 101.833 27.5 100.4 27.5 99.9995C27.5 99.5995 28.5 97.8329 29 96.9995L29.5 93.4995V89.9995L29 88.4995L27.5 87.4995L24.5 86L22.5 84.4995L19.5 82.4995L17 76.5C17.4 63.7 25 82.5 29 70.5L30 73V75L31 76.5L32 78L34.5 79L37 79.5L41 78.5L43 77L44.5 75.5L46 72.5L47 73.5L49 77L52.5 80L57.5 82V85L55.5 86L51.5 89L46.5 93L37.5 102.5Z'
                    fill='#184861'
                  ></path>
                  <path
                    d='M59.1412 83.661C55.8956 85.3556 53.2676 87.1077 51.415 88.4432C46.4605 92.0335 37.5567 102.646 37.5567 102.646H26.1254C26.1254 102.646 29.7587 95.1929 29.7587 92.0766C29.7587 88.9602 29.414 88.2709 29.414 88.2709C29.414 88.2709 22.8367 86.1886 20.0651 83.0722C17.2934 79.9559 15.9004 75.7912 15.9004 73.0196V69.5586'
                    stroke='#58595B'
                    stroke-width='2'
                    stroke-miterlimit='10'
                    stroke-linecap='round'
                  ></path>
                  <path
                    d='M100.788 34.9062C100.788 34.9062 102.181 35.2509 104.952 36.6439C107.724 38.0369 119.845 44.2696 116.384 61.2442C112.951 78.0322 93.9518 76.8689 80.7971 77.5008C80.6535 77.5008 80.4956 77.5152 80.3519 77.5295C80.0935 77.5295 79.8493 77.5583 79.5908 77.5726'
                    stroke='#58595B'
                    stroke-width='2'
                    stroke-miterlimit='10'
                    stroke-linecap='round'
                  ></path>
                  <path
                    d='M29.055 44.2726C29.055 44.2726 24.5456 41.1563 18.313 41.8456C12.0803 42.535 5.48865 46.355 3.06165 54.67C0.634653 62.985 5.30196 71.1276 7.91565 73.7269C11.032 76.8433 17.3795 79.0118 17.3795 79.0118'
                    stroke='#58595B'
                    stroke-width='2'
                    stroke-miterlimit='10'
                    stroke-linecap='round'
                  ></path>
                  <path
                    d='M22.3049 63.1566C22.3049 63.1566 26.8143 56.2203 33.7362 58.3026C40.6726 60.385 43.7889 68.0106 46.9052 73.8986C50.0216 79.7866 61.1082 87.4123 71.8502 82.2136C82.5922 77.0149 87.1015 70.7823 86.0532 62.4673C85.0192 54.1523 80.1652 49.2983 74.2772 47.216C68.3892 45.1336 63.8799 47.5606 62.5012 49.643C61.1082 51.7253 62.5012 54.1523 62.5012 54.1523'
                    stroke='#58595B'
                    stroke-width='2'
                    stroke-miterlimit='10'
                    stroke-linecap='round'
                  ></path>
                  <path
                    d='M29.4137 70.9551C29.4137 70.9551 29.0691 79.2701 36.6947 79.6147C44.3204 79.9594 45.6991 71.9891 45.6991 71.9891'
                    stroke='#58595B'
                    stroke-width='2'
                    stroke-miterlimit='10'
                    stroke-linecap='round'
                  ></path>
                  <path
                    d='M53.6548 59.5098C53.6548 59.5098 53.6548 69.5624 62.3144 69.9071C70.9741 70.2518 73.0564 62.6261 73.0564 62.6261'
                    stroke='#58595B'
                    stroke-width='2'
                    stroke-miterlimit='10'
                    stroke-linecap='round'
                  ></path>
                  <path
                    d='M85.6655 41.8997C85.6655 41.8997 86.0676 31.8614 77.4367 31.1577C68.7914 30.454 66.4075 37.9935 66.4075 37.9935'
                    stroke='#58595B'
                    stroke-width='2'
                    stroke-miterlimit='10'
                    stroke-linecap='round'
                  ></path>
                  <path
                    d='M91.8554 47.043C91.8554 47.043 89.2705 56.0329 96.9392 58.5748C104.608 61.1167 108.428 54.8266 108.428 54.8266'
                    stroke='#58595B'
                    stroke-width='2'
                    stroke-miterlimit='10'
                    stroke-linecap='round'
                  ></path>
                  <path
                    d='M54.359 27.6387C54.359 27.6387 56.786 38.036 46.044 41.497C35.302 44.958 32.875 37.6913 32.875 37.6913'
                    stroke='#58595B'
                    stroke-width='2'
                    stroke-miterlimit='10'
                    stroke-linecap='round'
                  ></path>
                  <path
                    d='M45.5125 52.0677C45.5125 52.0677 42.0515 49.9854 42.3962 46.869C42.7409 43.7527 45.2253 41.7422 45.2253 41.7422'
                    stroke='#58595B'
                    stroke-width='2'
                    stroke-miterlimit='10'
                    stroke-linecap='round'
                  ></path>
                  <path
                    d='M59.73 40.6348C59.73 40.6348 61.4677 44.4404 64.584 45.4888C67.7003 46.5228 69.2656 46.3504 69.2656 46.3504'
                    stroke='#58595B'
                    stroke-width='2'
                    stroke-miterlimit='10'
                    stroke-linecap='round'
                  ></path>
                  <path
                    d='M63.5359 25.3862C63.5359 25.3862 70.3286 18.8807 81.9035 20.5322C90.3909 21.7385 96.681 26.6931 98.3612 29.0195C100.616 32.1359 101.32 37.4781 100.444 40.1062C99.4095 43.2225 97.1549 45.1325 97.1549 45.1325'
                    stroke='#58595B'
                    stroke-width='2'
                    stroke-miterlimit='10'
                    stroke-linecap='round'
                  ></path>
                  <path
                    d='M10.5437 44.5134C10.5437 44.5134 10.874 35.4373 16.762 30.2386C22.65 25.04 29.931 21.9237 34.426 21.579C38.9353 21.2343 41.233 21.3636 41.233 21.3636'
                    stroke='#58595B'
                    stroke-width='2'
                    stroke-miterlimit='10'
                    stroke-linecap='round'
                  ></path>
                  <path
                    d='M71.1176 21.3073C71.1176 21.3073 66.1343 16.2092 56.4263 16.5538C46.7183 16.8985 41.175 20.7185 38.7624 23.8348C36.3354 26.9512 35.9907 28.6888 35.9907 28.6888'
                    stroke='#58595B'
                    stroke-width='2'
                    stroke-miterlimit='10'
                    stroke-linecap='round'
                  ></path>
                </svg>
              </div>

              <p className='text-[15px] font-medium'>Neurosciences</p>
            </div>

            {/*  */}
            <div>
              <svg
                width='7'
                height='12'
                viewBox='0 0 7 12'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M1 0.999612L5.8 5.79961L1 10.5996'
                  stroke='#58595B'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                ></path>
              </svg>
            </div>
          </div>
        </article>
        <article className='w-full lg:w-[374px] py-2 border-b-2 border-[##B7B7B7]'>
          <div className='flex justify-between items-center'>
            {/*  */}
            <div className='flex space-x-5 items-center'>
              <div>
                <svg
                  width='42'
                  height='42'
                  viewBox='0 0 120 120'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M107.967 63.1688C107.967 73.569 99.5473 82 89.1607 82C91.1063 74.8571 91.1063 68.3742 91.1063 57.974C91.1063 47.5739 78.7742 32 89.1607 32C99.5473 32 108.616 48.8831 107.967 63.1688Z'
                    fill='#184861'
                  ></path>
                  <path
                    d='M12.6528 103.237C12.6528 103.237 14.8662 69.9851 32.5347 74.0386C41.7228 76.1233 61.3344 87.5248 67.048 65.6484C68.1418 61.0929 71.8737 51.9949 61.5017 44.5697C57.1264 41.4298 53.549 38.4701 56.0068 15.3711'
                    stroke='#58595B'
                    stroke-width='2'
                    stroke-miterlimit='10'
                    stroke-linecap='round'
                  ></path>
                  <path
                    d='M66.9321 16.3633C66.9321 16.3633 63.0072 42.8724 74.9106 36.4768C80.4054 33.5299 89.8123 28.228 99.5281 38.4714C107.365 46.5013 113.761 59.1768 99.6825 83.1637C92.489 95.6719 70.4967 114.499 42.1345 88.9803C37.7592 85.0683 26.6666 77.8233 23.3979 104.268'
                    stroke='#58595B'
                    stroke-width='2'
                    stroke-miterlimit='10'
                    stroke-linecap='round'
                  ></path>
                  <path
                    d='M62.0171 91.7346C62.0171 91.7346 74.0878 93.8707 81.3713 89.4955C88.8093 85.0301 92.5412 76.8457 92.5412 76.8457'
                    stroke='#58595B'
                    stroke-width='2'
                    stroke-miterlimit='10'
                    stroke-linecap='round'
                  ></path>
                </svg>
              </div>

              <p className='text-[15px] font-medium'>Gastrosciences</p>
            </div>

            {/*  */}
            <div>
              <svg
                width='7'
                height='12'
                viewBox='0 0 7 12'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M1 0.999612L5.8 5.79961L1 10.5996'
                  stroke='#58595B'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                ></path>
              </svg>
            </div>
          </div>
        </article>
        <article className='w-full lg:w-[374px] py-2 border-b-2 border-[##B7B7B7]'>
          <div className='flex justify-between items-center'>
            {/*  */}
            <div className='flex space-x-5 items-center'>
              <div>
                <svg
                  width='42'
                  height='42'
                  viewBox='0 0 120 120'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M47.5003 86.5C43.5003 93 45.4999 107 34.9999 104C26.5 87 13.4999 86 14.4997 85C14.4997 81.2559 13.5 74.0004 31.7829 74C35.3956 74 51.0003 76 47.5003 86.5Z'
                    fill='#184861'
                  ></path>
                  <path
                    d='M58.5905 47.337L73.6254 31.8461C73.6254 31.8461 75.4493 29.1103 75.9053 23.6385C76.3613 18.1668 79.5531 14.063 83.2009 14.519C86.8487 14.975 89.449 23.047 92.7764 26.3744C96.4243 30.0222 106 30.4782 106 35.4939C106 40.0784 103.757 43.566 97.3362 44.1575C93.0352 44.5519 89.7325 45.279 88.8821 45.4762C88.7466 45.5131 88.6234 45.5747 88.5124 45.6733L69.5216 63.7522H65.8738L64.9618 52.8088L58.5781 53.2648V47.337H58.5905Z'
                    stroke='#58595B'
                    stroke-width='2'
                    stroke-miterlimit='10'
                    stroke-linecap='round'
                  ></path>
                  <path
                    d='M50.8386 55.5449L31.8477 73.6238C31.7491 73.7224 31.6136 73.7963 31.478 73.821C30.6277 74.0182 27.3372 74.7453 23.0239 75.1396C16.6033 75.7189 14.3604 79.2188 14.3604 83.8032C14.3604 88.819 23.9359 89.2749 27.5837 92.9228C30.8988 96.2378 33.5114 104.322 37.1592 104.778C40.8071 105.234 43.9989 101.13 44.4549 95.6586C44.9108 90.1869 46.7348 87.451 46.7348 87.451L61.7697 71.9601L63.5936 70.1362H57.6659V62.3846H50.8262V55.5449H50.8386Z'
                    stroke='#58595B'
                    stroke-width='2'
                    stroke-miterlimit='10'
                    stroke-linecap='round'
                  ></path>
                  <path
                    d='M46.9697 45.2906L39.9082 38.2168'
                    stroke='#58595B'
                    stroke-width='2'
                    stroke-miterlimit='10'
                    stroke-linecap='round'
                  ></path>
                  <path
                    d='M52.3178 42.1873L51.8618 32.2051'
                    stroke='#58595B'
                    stroke-width='2'
                    stroke-miterlimit='10'
                    stroke-linecap='round'
                  ></path>
                  <path
                    d='M43.8759 50.3945L33.8813 50.4438'
                    stroke='#58595B'
                    stroke-width='2'
                    stroke-miterlimit='10'
                    stroke-linecap='round'
                  ></path>
                  <path
                    d='M74.3276 75.1875L81.3891 82.249'
                    stroke='#58595B'
                    stroke-width='2'
                    stroke-miterlimit='10'
                    stroke-linecap='round'
                  ></path>
                  <path
                    d='M68.9795 78.2812L69.4231 88.2635'
                    stroke='#58595B'
                    stroke-width='2'
                    stroke-miterlimit='10'
                    stroke-linecap='round'
                  ></path>
                  <path
                    d='M77.4214 70.0864L87.4159 70.0371'
                    stroke='#58595B'
                    stroke-width='2'
                    stroke-miterlimit='10'
                    stroke-linecap='round'
                  ></path>
                </svg>
              </div>

              <p className='text-[15px] font-medium'>Orthopaedics</p>
            </div>

            {/*  */}
            <div>
              <svg
                width='7'
                height='12'
                viewBox='0 0 7 12'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M1 0.999612L5.8 5.79961L1 10.5996'
                  stroke='#58595B'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                ></path>
              </svg>
            </div>
          </div>
        </article>
        <article className='w-full lg:w-[374px] py-2 border-b-2 border-[##B7B7B7]'>
          <div className='flex justify-between items-center'>
            {/*  */}
            <div className='flex space-x-5 items-center'>
              <div>
                <svg
                  width='42'
                  height='42'
                  viewBox='0 0 120 120'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M73.5 91.5L69 96.5L63.5 99.5C61 111 56.5 100.3 56.5 99.5C56.5 98.7 47.3333 93.8333 48 92L47 87L50.5 80.5L53.5 79L56.5 78L57.5 77.5H62L65.5 78.5C66.3333 78.8333 68.2 79.7 69 80.5C69.8 81.3 72.6667 83.6667 73 84.5L73.5 91.5Z'
                    fill='#184861'
                  ></path>
                  <path
                    d='M44.1958 30.6289L54.1271 36.7084C57.8143 38.969 62.4562 38.969 66.1434 36.7084L76.0746 30.6289'
                    stroke='#58595B'
                    stroke-width='2.53'
                    stroke-miterlimit='10'
                    stroke-linecap='round'
                  ></path>
                  <path
                    d='M42.0776 36.6973L50.9445 42.1183C54.3573 44.2033 56.4313 47.9234 56.4313 51.9179V72.6803'
                    stroke='#58595B'
                    stroke-width='2.53'
                    stroke-miterlimit='10'
                    stroke-linecap='round'
                  ></path>
                  <path
                    d='M63.8281 72.694V51.9316C63.8281 47.9371 65.9022 44.217 69.315 42.132L78.1818 36.7109'
                    stroke='#58595B'
                    stroke-width='2.53'
                    stroke-miterlimit='10'
                    stroke-linecap='round'
                  ></path>
                  <path
                    d='M46.2369 45.5225C46.2698 49.0122 45.8528 51.7886 44.8652 54.1589C41.8255 61.7198 33.1562 61.5882 26.0561 57.8571C17.727 52.9189 14.7202 42.9108 16.487 34.5268C18.8354 23.3884 26.6707 14.368 36.997 14.0058C49.4193 13.7534 47.883 21.7424 46.3576 25.7258'
                    stroke='#58595B'
                    stroke-width='2.53'
                    stroke-miterlimit='10'
                    stroke-linecap='round'
                  ></path>
                  <path
                    d='M73.9018 25.7342C72.3765 21.7507 70.8401 13.7508 83.2625 14.0142C93.5888 14.3653 101.424 23.3967 103.772 34.5242C105.539 42.9081 102.532 52.9162 94.2033 57.8544C87.1033 61.5855 78.423 61.7172 75.3943 54.1562C74.4066 51.7859 73.9896 49.0205 74.0225 45.5199'
                    stroke='#58595B'
                    stroke-width='2.53'
                    stroke-miterlimit='10'
                    stroke-linecap='round'
                  ></path>
                  <path
                    d='M73.6056 87.0899C71.6413 77.6305 60.1408 77.7951 60.1298 77.7951C60.1188 77.7951 48.6183 77.6305 46.654 87.0899C46.3467 88.7799 46.5881 90.5466 47.4221 92.05C51.4276 98.7879 58.2203 96.1213 58.8459 103.814C58.9007 104.483 59.4604 104.999 60.1298 104.999C60.7992 104.999 61.3588 104.483 61.4137 103.814C62.0282 96.1213 68.821 98.777 72.8374 92.05C73.6824 90.5466 73.9129 88.7799 73.6056 87.0899Z'
                    stroke='#58595B'
                    stroke-width='2.53'
                    stroke-miterlimit='10'
                    stroke-linecap='round'
                  ></path>
                  <path
                    d='M98.3185 42.4473C95.2568 50.4801 89.0895 55.5609 84.5244 53.8271'
                    stroke='#58595B'
                    stroke-width='2.2'
                    stroke-miterlimit='10'
                    stroke-linecap='round'
                  ></path>
                  <path
                    d='M20.438 42.4473C23.4997 50.4801 29.6669 55.5609 34.232 53.8271'
                    stroke='#58595B'
                    stroke-width='2.2'
                    stroke-miterlimit='10'
                    stroke-linecap='round'
                  ></path>
                </svg>
              </div>

              <p className='text-[15px] font-medium'>Renal Care</p>
            </div>

            {/*  */}
            <div>
              <svg
                width='7'
                height='12'
                viewBox='0 0 7 12'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M1 0.999612L5.8 5.79961L1 10.5996'
                  stroke='#58595B'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                ></path>
              </svg>
            </div>
          </div>
        </article>

        <div className='mt-28 flex space-x-5 items-center'>
          <Link href='#' className='flex space-x-5 items-center'>
            <p>View All Specialities</p>

            <div className='w-[34px] h-[34px] rounded-full bg-[#238751] flex justify-center items-center '>
              <img src='/img/right-arrow (1).png' className='w-8' alt='' />
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}

function SearchBy() {
  const alphabets = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
  return (
    <section className='pl-5'>
      <div className='flex flex-col space-y-16'>
        <div className='flex flex-col space-y-5'>
          <h2 className='text-[20px] capitalize font-semibold'>Search By</h2>
          {/* buttons */}
          <div className='flex space-x-1 lg:space-x-5 items-center'>
            <button className='px-2 lg:px-6 py-2 flex justify-center items-center text-white font-medium bg-[#184861] rounded-full'>
              Ailments
            </button>
            <button className='px-2 lg:px-6 py-2 flex justify-center items-center text-[#58595b] border-2 border-[#58595b] rounded-full font-medium transition hover:text-white hover:bg-[#184861] duration-200 ease-in-out'>
              Treatments
            </button>
            <button className='px-2 lg:px-6 py-2 flex justify-center items-center text-[#58595b] border-2 border-[#58595b] rounded-full font-medium transition hover:text-white hover:bg-[#184861] duration-200 ease-in-out'>
              Technologies
            </button>
          </div>
          {/*  */}
          <div className='grid gap-5 grid-cols-6'>
            {alphabets.map((alphabet, idx) => {
              return (
                <div
                  key={alphabet}
                  className='w-[44px] h-[44px] flex justify-center items-center rounded-full bg-white p-2 shadow-xl uppercase text-[16px] hover:bg-[#184861] hover:text-white hover:cursor-pointer transition ease-in-out duration-200'
                >
                  {alphabet}
                </div>
              );
            })}
          </div>
        </div>

        <div className='flex space-x-5 items-center'>
          <Link href='#' className='flex space-x-5 items-center'>
            <p>View All Ailments</p>

            <div className='w-[34px] h-[34px] rounded-full bg-[#238751] flex justify-center items-center '>
              <img src='/img/right-arrow (1).png' className='w-8' alt='' />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

function Specialities() {
  return (
    <div className=' m-2 lg:mt-20'>
      <section className=' bg-[#f6f6f6] '>
        {/* <Tab /> */}
        <div className='p-8 lg:p-16 text-[#58595b] flex flex-col space-y-8 lg:space-y-0 lg:flex-row lg:justify-between'>
          {/*  */}
          <div className='flex flex-col space-y-5'>
            <div className='w-44 flex shadow-xl justify-center items-center py-2 px-5 bg-white rounded-full'>
              <h1 className='text-[20px] font-semibold text-[#238751]'>
                Specialities
              </h1>
            </div>

            <p className='text base lg:text-[28px] text-[#184861] font-semibold '>
              Explore our Centres of Clinical Excellence
            </p>

            <div className='w-full grid gap-6 grid-cols-3 lg:grid-cols-4'>
              <div className='bg-white p-5 rounded-lg shadow-lg flex flex-col space-y-5 items-center'>
                <Image
                  src='/img/specialities/cardiology.png'
                  width={42}
                  height={42}
                />
                <p className='capitalize font-semibold'>Cardiology</p>
              </div>
              <div className='bg-white p-5 rounded-lg shadow-lg flex flex-col space-y-5 items-center'>
                <Image
                  src='/img/specialities/neurology.png'
                  width={42}
                  height={42}
                />
                <p className='capitalize font-semibold'>Neurology</p>
              </div>
              <div className='bg-white p-5 rounded-lg shadow-lg flex flex-col space-y-5 items-center'>
                <Image
                  src='/img/specialities/gastroenterology.png'
                  width={42}
                  height={42}
                />
                <p className='capitalize font-semibold'>gastroenterology</p>
              </div>
              <div className='bg-white p-5 rounded-lg shadow-lg flex flex-col space-y-5 items-center'>
                <Image
                  src='/img/specialities/bone.png'
                  width={42}
                  height={42}
                />
                <p className='capitalize font-semibold'>Orthopaedic</p>
              </div>
              <div className='bg-white p-5 rounded-lg shadow-lg flex flex-col space-y-5 items-center'>
                <Image
                  src='/img/specialities/oncology.png'
                  width={42}
                  height={42}
                />
                <p className='capitalize font-semibold'>oncology</p>
              </div>
              <div className='bg-white p-5 rounded-lg shadow-lg flex flex-col space-y-5 items-center'>
                <Image
                  src='/img/specialities/gynecology.png'
                  width={42}
                  height={42}
                />
                <p className='capitalize font-semibold'>gynecology</p>
              </div>
              <div className='bg-white p-5 rounded-lg shadow-lg flex flex-col space-y-5 items-center'>
                <Image
                  src='/img/specialities/dermatology.png'
                  width={42}
                  height={42}
                />
                <p className='capitalize font-semibold'>dermatology</p>
              </div>
              <div className='bg-white p-5 rounded-lg shadow-lg flex flex-col space-y-5 items-center'>
                <Image
                  src='/img/specialities/ophthalmology.png'
                  width={42}
                  height={42}
                />
                <p className='capitalize font-semibold'>ophthalmology</p>
              </div>
              <div className='bg-white p-5 rounded-lg shadow-lg flex flex-col space-y-5 items-center'>
                <Image
                  src='/img/specialities/pediatrics.png'
                  width={42}
                  height={42}
                />
                <p className='capitalize font-semibold'>pediatrics</p>
              </div>
              <div className='bg-white p-5 rounded-lg shadow-lg flex flex-col space-y-5 items-center'>
                <Image
                  src='/img/specialities/endocrinology.png'
                  width={42}
                  height={42}
                />
                <p className='capitalize font-semibold'>endocrinology</p>
              </div>
              <div className='bg-white p-5 rounded-lg shadow-lg flex flex-col space-y-5 items-center'>
                <Image
                  src='/img/specialities/urology.png'
                  width={42}
                  height={42}
                />
                <p className='capitalize font-semibold'>Urology</p>
              </div>
              <div className='bg-white p-5 rounded-lg shadow-lg flex flex-col space-y-5 items-center'>
                <Image
                  src='/img/specialities/kidney.png'
                  width={42}
                  height={42}
                />
                <p className='capitalize font-semibold'>Nephrology</p>
              </div>
            </div>
          </div>
          {/*  */}
          {/* <SpecialitiesSection /> */}
          {/*  */}
          <SearchBy />
        </div>
      </section>
    </div>
  );
}
export default Specialities;
