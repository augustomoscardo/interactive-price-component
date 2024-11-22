
export function App() {

  return (
    <div className="h-screen bg-very-pale-blue">
      <div className="bg-pattern bg-no-repeat bg-[length:100%_auto] w-full h-full flex flex-col items-center">
        <div className="bg-circles bg-no-repeat flex flex-col gap-3">
          <h1 className="mx-auto">Simple, traffic-based pricing</h1>
          <p>Sig-up for our 30-day trial. No credit card required</p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between w-[500px]">
            <span>100k pageviews</span>
            <span><strong>$16.00</strong>/ month</span>
          </div>

          <div>
            <input type="range" name="" id="" />
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
                <span>Unlimited websites</span>
              </div>
              <div className="flex items-center gap-2">
                <img src="" alt="" />
                <span>Unlimited websites</span>
              </div>
            </div>

            <button>Start my trial</button>
          </div>
        </div>
      </div>
    </div>
  )
}