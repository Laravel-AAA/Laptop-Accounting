import PrimaryButton from "@/Components/Buttons/PrimaryButton";
import { Head, Link } from "@inertiajs/react";
import { FormEventHandler } from "react";
import { AuthPageProps } from "@/types";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import FormLayout from "@/Layouts/GuestLayout/FormLayout";
import Footer from "@/Layouts/GuestLayout/Partials/Footer";
import useBetterForm from "@/Utilities/useBetterForm";
import { useTranslation } from "react-i18next";

export default function VerifyEmail({
  status,
  auth,
}: AuthPageProps<{ status?: string }>) {
  const { post, processing } = useBetterForm({});

  const submit: FormEventHandler = (e) => {
    e.preventDefault();

    post(route("verification.send"));
  };

  const { t, i18n } = useTranslation();
  return (
    <AuthenticatedLayout header={null} user={auth.user}>
      <FormLayout>
        <Head title="Email Verification" />

        <div dir={i18n.dir()} className="mb-4 text-sm text-gray-600">
          {t(
            "Thanks for signing up! Before getting started, you have to verify your email address by clicking on the link we just emailed to you. If you didn't receive the email, we will gladly send you another.",
          )}
        </div>

        {status === "verification-link-sent" && (
          <div dir={i18n.dir()} className="mb-4 text-sm font-medium text-green-600">
            {t(
              "A new verification link has been sent to the email address you provided during registration.",
            )}
          </div>
        )}

        <form dir={i18n.dir()} onSubmit={submit}>
          <div className="mt-4 flex items-center justify-between">
            <PrimaryButton type="submit" disabled={processing}>
              {t("Resend Verification Email")}
            </PrimaryButton>

            <Link
              href={route("logout")}
              method="post"
              as="button"
              className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none "
            >
              {t("Log Out")}
            </Link>
          </div>
        </form>
      </FormLayout>
      <Footer />
    </AuthenticatedLayout>
  );
}
