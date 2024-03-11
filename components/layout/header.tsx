"use client";

import { LoginForm } from "@/components/auth/login-form";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Link from "next/link";
import { CiLogin } from "react-icons/ci";

function Header() {
  return (
    <div className=" w-full flex flex-row justify-between p-5 mb-5">
      <div>Vert-Tige</div>
      <nav>
        <ul className="flex flex-row">
          <Link href="/" className="pr-5">
            <li>Acceuil</li>
          </Link>
          <Link href="/creation" className="pr-5">
            <li>Nos création</li>
          </Link>
          <Link href="/contact" className="pr-5">
            <li>Contact</li>
          </Link>
          <li>
            <Dialog>
              <DialogTrigger>
                <CiLogin />
              </DialogTrigger>
              <DialogContent>
                <LoginForm />
              </DialogContent>
            </Dialog>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
