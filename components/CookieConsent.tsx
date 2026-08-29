"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "vxai-cookie-notice-seen";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Must read localStorage in an effect, not a lazy useState initializer:
    // this component is server-rendered first (no `window`/localStorage
    // there), so state has to start false to match SSR output and only
    // flip after mount once we can safely check the browser's storage.
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setVisible(true);
      }
    } catch {
      // localStorage unavailable (private browsing, disabled storage) — skip silently.
    }
  }, []);

  function dismiss() {
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // Nothing to persist — banner just won't be remembered this session.
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-live="polite" aria-label="Cookie notice">
      <p>
        We only use essential local storage to remember this notice — no
        tracking or advertising cookies. See our{" "}
        <Link href="/cookies">Cookie Policy</Link>.
      </p>
      <button type="button" className="btn btn-primary" onClick={dismiss}>
        Got It
      </button>
    </div>
  );
}
