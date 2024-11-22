
export function App() {
  return (
    <div className="h-screen bg-very-pale-blue">
      <div className="bg-pattern bg-no-repeat bg-[length:100%_auto] w-full h-full flex flex-col items-center">
        <div className="bg-circles bg-no-repeat bg-center flex flex-col gap-3 justify-center mt-12 h-48">
          <h1 className="mx-auto text-3xl font-bold text-dark-desaturated-blue">
            Simple, traffic-based pricing
          </h1>
          <p className="text-center text-15 font-semibold text-grayish-blue">
            Sign-up for our 30-day trial. No credit card required.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between w-[500px]">
            <span className="text-grayish-blue uppercase tracking-widest font-bold text-15">100k pageviews</span>
            <span className="text-grayish-blue font-semibold"><strong className="text-dark-desaturated-blue text-3xl font-bold">$16.00</strong>/ month</span>
          </div>

          <div>
            <input className="w-full" type="range" name="" id="" />
          </div>

          <div className="flex items-center gap-2">
            <div>
              <span>Monthly billing</span>
              <input type="checkbox" name="" id="" />
            </div>
            <div>
              <span>Year Billing</span>
              <span>25% discount</span>
            </div>
          </div>

          <div className="border border-light-grayish-blue border-solid" />

          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <img src="" alt="" />
                <span>Unlimited websites</span>
              </div>
              <div className="flex items-center gap-2">
                <img src="" alt="" />
                <span>100% data ownership</span>
              </div>
              <div className="flex items-center gap-2">
                <img src="" alt="" />
                <span>Email reports</span>
              </div>
            </div>

            <button className="bg-dark-desaturated-blue px-10 py-2 text-white rounded-full hover:brightness-90">Start my trial</button>
          </div>
        </div>
      </div>
    </div>
  )
}