const birthdayparty = [
  {
    id: 1,
    name: "Husband's Birthday",
    img: "https://s3-alpha-sig.figma.com/img/6848/66e4/41f9ecfa5b4f8dba47d958cb1dc06b0e?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mWaGa2jhLjni~u5Qiii-fpdZtyLacxU21W-ENXSWfZhIdGNLaikZMdjawSASaOcJ8RuQsYWURjOc2BefGyvmMo2JOK4Qw4pqDhb~bz~22Aww3p8T-IZIifn8huQcTTcNx~fRN1IXscab7DhQAnCddDSPxfjcOCJIcjrCDhAXSnxnTWhFvjvjVSqbi~VH76hQkIZ95hvl4c3mUSSFVMXgIHzP-q6EC73C8DH-d5ct8p0HPxr7pDlO31LFy5vtSxnkn9Nm1bMfppe5khxF4pQPlnqg1L9va06QBDPnt2lpGEFnSZLINeisbRWBOnHRlwYjXil8lf8~xyO8ci1r9z5~Zg__",
  },
  {
    id: 2,
    name: "Wife's Birthday",
    img: "https://s3-alpha-sig.figma.com/img/ee1c/addd/c501b3e71bd0343f1508eda634cd66c9?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OUAX7m3PZ~rb1~RB146bysH7EgZXsaudBjD66yGIIf7PKIZMCy9~S31hY8eAKOCH4bo8bQY75mxhIrGi14Kyv1WF9T8oVTxCYRWfeO2Y4b011JWG63ksXxq6WYeyzwv22le6HLwamr-liTq8yiv0Y2ntyOHOd1BTcQ~AHbiEa8i02TlQ6gOEUhHe5GkQdTRANk4mX1B6xDeYGKoGwunDX1kNexGso-gS2IvRHfSEH~RyFNEH12qhz5e0VIVheIAkeB8ibfcBR11N-yjnbM3BDTHBAn~sRgt8PeDEF7a9N~KVrXBaJj7yglU4xXeqojJbRcu2c97ODLzDxJgzN3OBIA__",
  },
  {
    id: 3,
    name: "Kid's Birthday",
    img: "https://s3-alpha-sig.figma.com/img/5e8c/58df/fe27b0dd6cc4b7c4f4016abafcdccd55?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=phf5ly7pMWH7MFf3DIzR2yB-9bgWdsZ-KcrrCehTSTPPHSZsxYzgiTyZwyVm2DS78BQO4CGHa4mLbSBQdEOJ0~5pTxQaE5-7rGaZzaVO4gw4l8Hz2~RQkfuL2KHJfct-5T64pJ2gGx8SPkb5DeyDMRn~lEjvB4s7~xN8J7txOrxXsuneNnIEwMg55vGmHm87MoYlZafNSVL38Ea58cBKZNgsdHp6VZc9QS4-btr3Al9icRy9lqa9WcfyWkF6zaExs2d5rpoV-7z1iP5YlmYfolVz4g1BxayBDMjb4B8KPEOluJOg6N~NatQyp4BHklFO8nisLPRCNltEkvNfKGrnlA__",
  },
];

const BannerCards = () => {
  return (
    <div className="grid grid-cols-3 gap-10 w-full">
      {birthdayparty.map((bp) => (
        <div
          key={bp.id}
          className="bg-cover bg-center mx-8 h-40 rounded-lg shadow-md flex items-center justify-center"
          style={{ backgroundImage: `url(${bp.img})` }} // Using inline style to set background image
        >
          <div className="text-white font-medium p-4">
            {bp.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BannerCards;
