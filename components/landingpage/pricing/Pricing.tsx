import { CheckIcon, CircleCheck, MinusIcon } from "lucide-react";
const includedFeatures = [
  "100+ Hours of course content",
  "300+ Problems Solved",
  "Weekly 2 Live Classes",
  "Weekly 2 Live Problem solving session",
  "Regular Quizzes",
  "Live Doubt Sessions",
  "Interview Tips",
  "Resume Preperation",
  "Mentor support",
  "24 months Validity",
];
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Pricing() {
  // const planFeatures: PlanFeature[] = [
  //   {
  //     type: "Financial data",
  //     features: [
  //       {
  //         name: "Open/High/Low/Close",
  //         free: true,
  //         startup: true,
  //         team: true,
  //         enterprise: true,
  //       },
  //       {
  //         name: "Price-volume difference indicator	",
  //         free: true,
  //         startup: true,
  //         team: true,
  //         enterprise: true,
  //       },
  //     ],
  //   },
  //   {
  //     type: "On-chain data",
  //     features: [
  //       {
  //         name: "Network growth",
  //         free: true,
  //         startup: false,
  //         team: true,
  //         enterprise: true,
  //       },
  //       {
  //         name: "Average token age consumed",
  //         free: true,
  //         startup: false,
  //         team: true,
  //         enterprise: true,
  //       },
  //       {
  //         name: "Exchange flow",
  //         free: false,
  //         startup: false,
  //         team: true,
  //         enterprise: true,
  //       },
  //       {
  //         name: "Total ERC20 exchange funds flow",
  //         free: false,
  //         startup: false,
  //         team: true,
  //         enterprise: true,
  //       },
  //     ],
  //   },
  //   {
  //     type: "Social data",
  //     features: [
  //       {
  //         name: "Dev activity",
  //         free: false,
  //         startup: true,
  //         team: false,
  //         enterprise: true,
  //       },
  //       {
  //         name: "Topic search",
  //         free: true,
  //         startup: true,
  //         team: true,
  //         enterprise: true,
  //       },
  //       {
  //         name: "Relative social dominance",
  //         free: true,
  //         startup: true,
  //         team: false,
  //         enterprise: true,
  //       },
  //     ],
  //   },
  // ];
  return (
    <div className="bg-white py-8 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl flex gap-5 items-center justify-center font-bold tracking-tight text-gray-900 sm:text-4xl">
            Simple no-tricks pricing
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et
            quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900 flex gap-4">
              Lifetime membership
            </h3>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">
                What’s included
              </h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
            >
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CircleCheck
                    className="h-6 w-5 flex-none text-green-600"
                    aria-hidden="true"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0 lg:flex lg:items-center lg:justify-center">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600">
                  Pay once, own it for 2 years
                </p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">
                    ₹6999
                  </span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                    INR
                  </span>
                </p>
                <a
                  href="#"
                  className="mt-10 block w-full rounded-md bg-green-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                >
                  Get access
                </a>
                <p className="mt-6 text-xs leading-5 text-gray-600">
                  Invoices and receipts available for easy company reimbursement
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="mt-20 lg:mt-32">
        <div className="lg:text-center mb-10 lg:mb-20">
          <h3 className="text-2xl font-semibold dark:text-white">
            Compare plans
          </h3>
        </div>
        <Table className="hidden lg:table">
          <TableHeader>
            <TableRow className="bg-muted hover:bg-muted">
              <TableHead className="w-3/12 text-primary">Plans</TableHead>
              <TableHead className="w-2/12 text-primary text-lg font-medium text-center">
                Free
              </TableHead>
              <TableHead className="w-2/12 text-primary text-lg font-medium text-center">
                Startup
              </TableHead>
              <TableHead className="w-2/12 text-primary text-lg font-medium text-center">
                Team
              </TableHead>
              <TableHead className="w-2/12 text-primary text-lg font-medium text-center">
                Enterprise
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {planFeatures.map((featureType) => (
              <>
                <TableRow className="bg-muted/50" key={featureType.type}>
                  <TableCell colSpan={5} className="font-bold">
                    {featureType.type}
                  </TableCell>
                </TableRow>
                {featureType.features.map((feature) => (
                  <TableRow
                    key={feature.name}
                    className="text-muted-foreground"
                  >
                    <TableCell>{feature.name}</TableCell>
                    <TableCell>
                      <div className="mx-auto w-min">
                        {feature.free ? (
                          <CheckIcon className="h-5 w-5" />
                        ) : (
                          <MinusIcon className="h-5 w-5" />
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="mx-auto w-min">
                        {feature.startup ? (
                          <CheckIcon className="h-5 w-5" />
                        ) : (
                          <MinusIcon className="h-5 w-5" />
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="mx-auto w-min">
                        {feature.team ? (
                          <CheckIcon className="h-5 w-5" />
                        ) : (
                          <MinusIcon className="h-5 w-5" />
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="mx-auto w-min">
                        {feature.enterprise ? (
                          <CheckIcon className="h-5 w-5" />
                        ) : (
                          <MinusIcon className="h-5 w-5" />
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </>
            ))}
          </TableBody>
        </Table>

        <div className="space-y-24 lg:hidden">
          <section>
            <div className="mb-4">
              <h4 className="text-xl font-medium">Free</h4>
            </div>
            <Table>
              {planFeatures.map((featureType) => (
                <>
                  <TableRow
                    key={featureType.type}
                    className="bg-muted hover:bg-muted"
                  >
                    <TableCell
                      colSpan={2}
                      className="w-10/12 text-primary font-bold"
                    >
                      {featureType.type}
                    </TableCell>
                  </TableRow>
                  {featureType.features.map((feature) => (
                    <TableRow
                      className="text-muted-foreground"
                      key={feature.name}
                    >
                      <TableCell className="w-11/12">{feature.name}</TableCell>
                      <TableCell className="text-right">
                        {feature.enterprise ? (
                          <CheckIcon className="h-5 w-5" />
                        ) : (
                          <MinusIcon className="h-5 w-5" />
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </>
              ))}
            </Table>
          </section>
          <section>
            <div className="mb-4">
              <h4 className="text-xl font-medium">Startup</h4>
            </div>
            <Table>
              {planFeatures.map((featureType) => (
                <>
                  <TableRow
                    key={featureType.type}
                    className="bg-muted hover:bg-muted"
                  >
                    <TableCell
                      colSpan={2}
                      className="w-10/12 text-primary font-bold"
                    >
                      {featureType.type}
                    </TableCell>
                  </TableRow>
                  {featureType.features.map((feature) => (
                    <TableRow
                      className="text-muted-foreground"
                      key={feature.name}
                    >
                      <TableCell className="w-11/12">{feature.name}</TableCell>
                      <TableCell className="text-right">
                        {feature.startup ? (
                          <CheckIcon className="h-5 w-5" />
                        ) : (
                          <MinusIcon className="h-5 w-5" />
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </>
              ))}
            </Table>
          </section>
          <section>
            <div className="mb-4">
              <h4 className="text-xl font-medium">Team</h4>
            </div>
            <Table>
              {planFeatures.map((featureType) => (
                <>
                  <TableRow
                    key={featureType.type}
                    className="bg-muted hover:bg-muted"
                  >
                    <TableCell
                      colSpan={2}
                      className="w-10/12 text-primary font-bold"
                    >
                      {featureType.type}
                    </TableCell>
                  </TableRow>
                  {featureType.features.map((feature) => (
                    <TableRow
                      className="text-muted-foreground"
                      key={feature.name}
                    >
                      <TableCell className="w-11/12">{feature.name}</TableCell>
                      <TableCell className="text-right">
                        {feature.team ? (
                          <CheckIcon className="h-5 w-5" />
                        ) : (
                          <MinusIcon className="h-5 w-5" />
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </>
              ))}
            </Table>
          </section>
          <section>
            <div className="mb-4">
              <h4 className="text-xl font-medium">Enterprise</h4>
            </div>
            <Table>
              {planFeatures.map((featureType) => (
                <>
                  <TableRow
                    key={featureType.type}
                    className="bg-muted hover:bg-muted"
                  >
                    <TableCell
                      colSpan={2}
                      className="w-10/12 text-primary font-bold"
                    >
                      {featureType.type}
                    </TableCell>
                  </TableRow>
                  {featureType.features.map((feature) => (
                    <TableRow
                      className="text-muted-foreground"
                      key={feature.name}
                    >
                      <TableCell className="w-11/12">{feature.name}</TableCell>
                      <TableCell className="text-right">
                        {feature.enterprise ? (
                          <CheckIcon className="h-5 w-5" />
                        ) : (
                          <MinusIcon className="h-5 w-5" />
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </>
              ))}
            </Table>
          </section>
        </div>
      </div> */}
    </div>
  );
}
