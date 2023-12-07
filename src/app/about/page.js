import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import styles from "./page.module.scss";
import Image from "next/image";
import Link from "next/link";
const About = () => {
  return (
    <>
      <Header />
      <div className={styles.Container}>
        <section className={styles.gallery}>
          <h1 className={styles.heading}>
            <span>T</span>
            <span>Ổ</span>
            <span>N</span>
            <span>G</span>
            <span className={styles.space}></span>
            <span>H</span>
            <span>Ợ</span>
            <span>P</span>
          </h1>
          <div className={styles.boxContainer}>
            <div className={styles.box}>
              <Image
                src="https://images.unsplash.com/photo-1612278675615-7b093b07772d?q=80&w=3538&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={420}
                height={276}
                alt="picture"
              />
              <div className={styles.content}>
                <h3>Ảnh chụp</h3>
                <p>
                  Những bức ảnh đẹp nhất về chuyến du lịch của bạn sẽ được chia
                  sẻ lên đây
                </p>
                <Link href="/">
                  <span className={styles.btn}>Trang chủ</span>
                </Link>
              </div>
            </div>
            <div className={styles.box}>
              <Image
                src="https://images.unsplash.com/photo-1498307833015-e7b400441eb8?q=80&w=3628&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={420}
                height={276}
                alt="picture"
              />
              <div className={styles.content}>
                <h3>Ảnh chụp</h3>
                <p>
                  Những bức ảnh đẹp nhất về chuyến du lịch của bạn sẽ được chia
                  sẻ lên đây
                </p>
                <Link href="/">
                  <span className={styles.btn}>Trang chủ</span>
                </Link>
              </div>
            </div>
            <div className={styles.box}>
              <Image
                src="https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={420}
                height={276}
                alt="picture"
              />
              <div className={styles.content}>
                <h3>Ảnh chụp</h3>
                <p>
                  Những bức ảnh đẹp nhất về chuyến du lịch của bạn sẽ được chia
                  sẻ lên đây
                </p>
                <Link href="/">
                  <span className={styles.btn}>Trang chủ</span>
                </Link>
              </div>
            </div>
            <div className={styles.box}>
              <Image
                src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={420}
                height={276}
                alt="picture"
              />
              <div className={styles.content}>
                <h3>Ảnh chụp</h3>
                <p>
                  Những bức ảnh đẹp nhất về chuyến du lịch của bạn sẽ được chia
                  sẻ lên đây
                </p>
                <Link href="/">
                  <span className={styles.btn}>Trang chủ</span>
                </Link>
              </div>
            </div>
            <div className={styles.box}>
              <Image
                src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={420}
                height={276}
                alt="picture"
              />
              <div className={styles.content}>
                <h3>Ảnh chụp</h3>
                <p>
                  Những bức ảnh đẹp nhất về chuyến du lịch của bạn sẽ được chia
                  sẻ lên đây
                </p>
                <Link href="/">
                  <span className={styles.btn}>Xem Thêm</span>
                </Link>
              </div>
            </div>
            <div className={styles.box}>
              <Image
                src="https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={420}
                height={276}
                alt="picture"
              />
              <div className={styles.content}>
                <h3>Ảnh chụp</h3>
                <p>
                  Những bức ảnh đẹp nhất về chuyến du lịch của bạn sẽ được chia
                  sẻ lên đây
                </p>
                <Link href="/about">
                  <span className={styles.btn}>Trang chủ</span>
                </Link>
              </div>
            </div>
            <div className={styles.box}>
              <Image
                src="https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={420}
                height={276}
                alt="picture"
              />
              <div className={styles.content}>
                <h3>Ảnh chụp</h3>
                <p>
                  Những bức ảnh đẹp nhất về chuyến du lịch của bạn sẽ được chia
                  sẻ lên đây
                </p>
                <Link href="/">
                  <span className={styles.btn}>Trang chủ</span>
                </Link>
              </div>
            </div>
            <div className={styles.box}>
              <Image
                src="https://images.unsplash.com/photo-1476610182048-b716b8518aae?q=80&w=3659&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={420}
                height={276}
                alt="picture"
              />
              <div className={styles.content}>
                <h3>Ảnh chụp</h3>
                <p>
                  Những bức ảnh đẹp nhất về chuyến du lịch của bạn sẽ được chia
                  sẻ lên đây
                </p>
                <Link href="/">
                  <span className={styles.btn}>Trang chủ</span>
                </Link>
              </div>
            </div>
            <div className={styles.box}>
              <Image
                src="https://images.unsplash.com/photo-1513581166391-887a96ddeafd?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={1000}
                height={276}
                layout="responsive"
                alt="picture"
              />
              <div className={styles.content}>
                <h3>Ảnh chụp</h3>
                <p>
                  Những bức ảnh đẹp nhất về chuyến du lịch của bạn sẽ được chia
                  sẻ lên đây
                </p>
                <Link href="/">
                  <span className={styles.btn}>Trang chủ</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className={styles.Container}>
        <section className={styles.gallery}>
          <h1 className={styles.heading}>
            <span>H</span>
            <span>A</span>
            <span>W</span>
            <span>A</span>
            <span>I</span>
            <span>I</span>
          </h1>
          <div className={styles.boxContainer}>
            <div className={styles.box}>
              <Image
                src="https://images.unsplash.com/photo-1462400362591-9ca55235346a?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={420}
                height={276}
                alt="picture"
              />
              <div className={styles.content}>
                <h3>Ảnh chụp</h3>
                <p>
                  Những bức ảnh đẹp nhất về chuyến du lịch của bạn sẽ được chia
                  sẻ lên đây
                </p>
                <Link href="/order">
                  <span className={styles.btn}>Đặt ngay</span>
                </Link>
              </div>
            </div>
            <div className={styles.box}>
              <Image
                src="https://images.unsplash.com/photo-1520627900660-e152fd1ee167?q=80&w=3376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={420}
                height={276}
                alt="picture"
              />
              <div className={styles.content}>
                <h3>Ảnh chụp</h3>
                <p>
                  Những bức ảnh đẹp nhất về chuyến du lịch của bạn sẽ được chia
                  sẻ lên đây
                </p>
                <Link href="/order">
                  <span className={styles.btn}>Đặt ngay</span>
                </Link>
              </div>
            </div>
            <div className={styles.box}>
              <Image
                src="https://images.unsplash.com/photo-1471079502516-250c19af6928?q=80&w=3348&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={420}
                height={276}
                alt="picture"
              />
              <div className={styles.content}>
                <h3>Ảnh chụp</h3>
                <p>
                  Những bức ảnh đẹp nhất về chuyến du lịch của bạn sẽ được chia
                  sẻ lên đây
                </p>
                <Link href="/order">
                  <span className={styles.btn}>Đặt ngay</span>
                </Link>
              </div>
            </div>
            <div className={styles.box}>
              <Image
                src="https://images.unsplash.com/photo-1483168527879-c66136b56105?q=80&w=3316&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={420}
                height={276}
                alt="picture"
              />
              <div className={styles.content}>
                <h3>Ảnh chụp</h3>
                <p>
                  Những bức ảnh đẹp nhất về chuyến du lịch của bạn sẽ được chia
                  sẻ lên đây
                </p>
                <Link href="/order">
                  <span className={styles.btn}>Đặt ngay</span>
                </Link>
              </div>
            </div>
            <div className={styles.box}>
              <Image
                src="https://images.unsplash.com/photo-1593275410252-af94c54a72f6?q=80&w=3348&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={420}
                height={276}
                alt="picture"
              />
              <div className={styles.content}>
                <h3>Ảnh chụp</h3>
                <p>
                  Những bức ảnh đẹp nhất về chuyến du lịch của bạn sẽ được chia
                  sẻ lên đây
                </p>
                <Link href="/order">
                  <span className={styles.btn}>Đặt ngay</span>
                </Link>
              </div>
            </div>
            <div className={styles.box}>
              <Image
                src="https://images.unsplash.com/photo-1528844433838-6115c9c13a14?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={420}
                height={276}
                alt="picture"
              />
              <div className={styles.content}>
                <h3>Ảnh chụp</h3>
                <p>
                  Những bức ảnh đẹp nhất về chuyến du lịch của bạn sẽ được chia
                  sẻ lên đây
                </p>
                <Link href="/order">
                  <span className={styles.btn}>Đặt ngay</span>
                </Link>
              </div>
            </div>
            <div className={styles.box}>
              <Image
                src="https://images.unsplash.com/photo-1611523587649-38432d33e9af?q=80&w=3302&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={420}
                height={276}
                alt="picture"
              />
              <div className={styles.content}>
                <h3>Ảnh chụp</h3>
                <p>
                  Những bức ảnh đẹp nhất về chuyến du lịch của bạn sẽ được chia
                  sẻ lên đây
                </p>
                <Link href="/order">
                  <span className={styles.btn}>Đặt ngay</span>
                </Link>
              </div>
            </div>
            <div className={styles.box}>
              <Image
                src="https://images.unsplash.com/photo-1602783941342-213bd94316c8?q=80&w=3433&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={420}
                height={276}
                alt="picture"
              />
              <div className={styles.content}>
                <h3>Ảnh chụp</h3>
                <p>
                  Những bức ảnh đẹp nhất về chuyến du lịch của bạn sẽ được chia
                  sẻ lên đây
                </p>
                <Link href="/order">
                  <span className={styles.btn}>Đặt ngay</span>
                </Link>
              </div>
            </div>
            <div className={styles.box}>
              <Image
                src="https://images.unsplash.com/photo-1625077506327-23f672fb68d7?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={1000}
                height={276}
                layout="responsive"
                alt="picture"
              />
              <div className={styles.content}>
                <h3>Ảnh chụp</h3>
                <p>
                  Những bức ảnh đẹp nhất về chuyến du lịch của bạn sẽ được chia
                  sẻ lên đây
                </p>
                <Link href="/order">
                  <span className={styles.btn}>Đặt ngay</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className={styles.Container}>
        <section className={styles.gallery}>
          <h1 className={styles.heading}>
            <span>M</span>
            <span>U</span>
            <span>M</span>
            <span>B</span>
            <span>A</span>
            <span>I</span>
          </h1>
          <div className={styles.boxContainer}>
            <div className={styles.box}>
              <Image
                src="https://images.unsplash.com/photo-1595658658481-d53d3f999875?q=80&w=3348&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={420}
                height={276}
                alt="picture"
              />
              <div className={styles.content}>
                <h3>Ảnh chụp</h3>
                <p>
                  Những bức ảnh đẹp nhất về chuyến du lịch của bạn sẽ được chia
                  sẻ lên đây
                </p>
                <Link href="/order">
                  <span className={styles.btn}>Đặt ngay</span>
                </Link>
              </div>
            </div>
            <div className={styles.box}>
              <Image
                src="https://images.unsplash.com/photo-1573143950521-36ef5345dae9?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={420}
                height={276}
                alt="picture"
              />
              <div className={styles.content}>
                <h3>Ảnh chụp</h3>
                <p>
                  Những bức ảnh đẹp nhất về chuyến du lịch của bạn sẽ được chia
                  sẻ lên đây
                </p>
                <Link href="/order">
                  <span className={styles.btn}>Đặt ngay</span>
                </Link>
              </div>
            </div>
            <div className={styles.box}>
              <Image
                src="https://images.unsplash.com/photo-1605905177654-65a5703f3fe8?q=80&w=3306&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={420}
                height={276}
                alt="picture"
              />
              <div className={styles.content}>
                <h3>Ảnh chụp</h3>
                <p>
                  Những bức ảnh đẹp nhất về chuyến du lịch của bạn sẽ được chia
                  sẻ lên đây
                </p>
                <Link href="/order">
                  <span className={styles.btn}>Đặt ngay</span>
                </Link>
              </div>
            </div>
            <div className={styles.box}>
              <Image
                src="https://images.unsplash.com/photo-1575310452551-5af1ad4a6dd5?q=80&w=3328&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={420}
                height={276}
                alt="picture"
              />
              <div className={styles.content}>
                <h3>Ảnh chụp</h3>
                <p>
                  Những bức ảnh đẹp nhất về chuyến du lịch của bạn sẽ được chia
                  sẻ lên đây
                </p>
                <Link href="/order">
                  <span className={styles.btn}>Đặt ngay</span>
                </Link>
              </div>
            </div>
            <div className={styles.box}>
              <Image
                src="https://images.unsplash.com/photo-1601961405399-801fb1f34581?q=80&w=3271&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={420}
                height={276}
                alt="picture"
              />
              <div className={styles.content}>
                <h3>Ảnh chụp</h3>
                <p>
                  Những bức ảnh đẹp nhất về chuyến du lịch của bạn sẽ được chia
                  sẻ lên đây
                </p>
                <Link href="/order">
                  <span className={styles.btn}>Đặt ngay</span>
                </Link>
              </div>
            </div>
            <div className={styles.box}>
              <Image
                src="https://images.unsplash.com/photo-1575261755165-1a9d4370c898?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={420}
                height={276}
                alt="picture"
              />
              <div className={styles.content}>
                <h3>Ảnh chụp</h3>
                <p>
                  Những bức ảnh đẹp nhất về chuyến du lịch của bạn sẽ được chia
                  sẻ lên đây
                </p>
                <Link href="/order">
                  <span className={styles.btn}>Đặt ngay</span>
                </Link>
              </div>
            </div>
            <div className={styles.box}>
              <Image
                src="https://images.unsplash.com/photo-1632677794623-a52637ff396d?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={420}
                height={276}
                alt="picture"
              />
              <div className={styles.content}>
                <h3>Ảnh chụp</h3>
                <p>
                  Những bức ảnh đẹp nhất về chuyến du lịch của bạn sẽ được chia
                  sẻ lên đây
                </p>
                <Link href="/order">
                  <span className={styles.btn}>Đặt ngay</span>
                </Link>
              </div>
            </div>
            <div className={styles.box}>
              <Image
                src="https://images.unsplash.com/photo-1547218321-b423e997ba77?q=80&w=3431&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={420}
                height={276}
                alt="picture"
              />
              <div className={styles.content}>
                <h3>Ảnh chụp</h3>
                <p>
                  Những bức ảnh đẹp nhất về chuyến du lịch của bạn sẽ được chia
                  sẻ lên đây
                </p>
                <Link href="/order">
                  <span className={styles.btn}>Đặt ngay</span>
                </Link>
              </div>
            </div>
            <div className={styles.box}>
              <Image
                src="https://images.unsplash.com/photo-1574565087163-11e46ca637a6?q=80&w=3371&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={1000}
                height={276}
                layout="responsive"
                alt="picture"
              />
              <div className={styles.content}>
                <h3>Ảnh chụp</h3>
                <p>
                  Những bức ảnh đẹp nhất về chuyến du lịch của bạn sẽ được chia
                  sẻ lên đây
                </p>
                <Link href="/order">
                  <span className={styles.btn}>Đặt ngay</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className={styles.Container}>
        <section className={styles.gallery}>
          <h1 className={styles.heading}>
            <span>P</span>
            <span>A</span>
            <span>R</span>
            <span>R</span>
            <span>I</span>
            <span>S</span>
          </h1>
          <div className={styles.boxContainer}>
            <div className={styles.box}>
              <Image
                src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=3273&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={420}
                height={276}
                alt="picture"
              />
              <div className={styles.content}>
                <h3>Ảnh chụp</h3>
                <p>
                  Những bức ảnh đẹp nhất về chuyến du lịch của bạn sẽ được chia
                  sẻ lên đây
                </p>
                <Link href="/order">
                  <span className={styles.btn}>Đặt ngay</span>
                </Link>
              </div>
            </div>
            <div className={styles.box}>
              <Image
                src="https://images.unsplash.com/photo-1549144511-f099e773c147?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={420}
                height={276}
                alt="picture"
              />
              <div className={styles.content}>
                <h3>Ảnh chụp</h3>
                <p>
                  Những bức ảnh đẹp nhất về chuyến du lịch của bạn sẽ được chia
                  sẻ lên đây
                </p>
                <Link href="/order">
                  <span className={styles.btn}>Đặt ngay</span>
                </Link>
              </div>
            </div>
            <div className={styles.box}>
              <Image
                src="https://images.unsplash.com/photo-1541628951107-a9af5346a3e4?q=80&w=3389&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={420}
                height={276}
                alt="picture"
              />
              <div className={styles.content}>
                <h3>Ảnh chụp</h3>
                <p>
                  Những bức ảnh đẹp nhất về chuyến du lịch của bạn sẽ được chia
                  sẻ lên đây
                </p>
                <Link href="/order">
                  <span className={styles.btn}>Đặt ngay</span>
                </Link>
              </div>
            </div>
            <div className={styles.box}>
              <Image
                src="https://images.unsplash.com/photo-1500313830540-7b6650a74fd0?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={420}
                height={276}
                alt="picture"
              />
              <div className={styles.content}>
                <h3>Ảnh chụp</h3>
                <p>
                  Những bức ảnh đẹp nhất về chuyến du lịch của bạn sẽ được chia
                  sẻ lên đây
                </p>
                <Link href="/order">
                  <span className={styles.btn}>Đặt ngay</span>
                </Link>
              </div>
            </div>
            <div className={styles.box}>
              <Image
                src="https://images.unsplash.com/photo-1581262177533-1b1760b87952?q=80&w=3362&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={420}
                height={276}
                alt="picture"
              />
              <div className={styles.content}>
                <h3>Ảnh chụp</h3>
                <p>
                  Những bức ảnh đẹp nhất về chuyến du lịch của bạn sẽ được chia
                  sẻ lên đây
                </p>
                <Link href="/order">
                  <span className={styles.btn}>Đặt ngay</span>
                </Link>
              </div>
            </div>
            <div className={styles.box}>
              <Image
                src="https://images.unsplash.com/photo-1564594736624-def7a10ab047?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={420}
                height={276}
                alt="picture"
              />
              <div className={styles.content}>
                <h3>Ảnh chụp</h3>
                <p>
                  Những bức ảnh đẹp nhất về chuyến du lịch của bạn sẽ được chia
                  sẻ lên đây
                </p>
                <Link href="/about">
                  <span className={styles.btn}>Trang chủ</span>
                </Link>
              </div>
            </div>
            <div className={styles.box}>
              <Image
                src="https://images.unsplash.com/photo-1477089922324-c1deaf4a2242?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={420}
                height={276}
                alt="picture"
              />
              <div className={styles.content}>
                <h3>Ảnh chụp</h3>
                <p>
                  Những bức ảnh đẹp nhất về chuyến du lịch của bạn sẽ được chia
                  sẻ lên đây
                </p>
                <Link href="/order">
                  <span className={styles.btn}>Đặt ngay</span>
                </Link>
              </div>
            </div>
            <div className={styles.box}>
              <Image
                src="https://images.unsplash.com/photo-1605701877331-645ad05dcb97?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={420}
                height={276}
                alt="picture"
              />
              <div className={styles.content}>
                <h3>Ảnh chụp</h3>
                <p>
                  Những bức ảnh đẹp nhất về chuyến du lịch của bạn sẽ được chia
                  sẻ lên đây
                </p>
                <Link href="/order">
                  <span className={styles.btn}>Đặt ngay</span>
                </Link>
              </div>
            </div>
            <div className={styles.box}>
              <Image
                src="https://images.unsplash.com/photo-1593474769219-fea89cf0bbef?q=80&w=2349&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={1000}
                height={276}
                layout="responsive"
                alt="picture"
              />
              <div className={styles.content}>
                <h3>Ảnh chụp</h3>
                <p>
                  Những bức ảnh đẹp nhất về chuyến du lịch của bạn sẽ được chia
                  sẻ lên đây
                </p>
                <Link href="/order">
                  <span className={styles.btn}>Đặt ngay</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className={styles.Container}>
        <section className={styles.gallery}>
          <h1 className={styles.heading}>
            <span>S</span>
            <span>Y</span>
            <span>D</span>
            <span>N</span>
            <span>E</span>
            <span>Y</span>
          </h1>
          <div className={styles.boxContainer}>
            <div className={styles.box}>
              <Image
                src="https://images.unsplash.com/photo-1523428096881-5bd79d043006?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={420}
                height={276}
                alt="picture"
              />
              <div className={styles.content}>
                <h3>Ảnh chụp</h3>
                <p>
                  Những bức ảnh đẹp nhất về chuyến du lịch của bạn sẽ được chia
                  sẻ lên đây
                </p>
                <Link href="/order">
                  <span className={styles.btn}>Đặt ngay</span>
                </Link>
              </div>
            </div>
            <div className={styles.box}>
              <Image
                src="https://images.unsplash.com/photo-1598948485421-33a1655d3c18?q=80&w=3348&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={420}
                height={276}
                alt="picture"
              />
              <div className={styles.content}>
                <h3>Ảnh chụp</h3>
                <p>
                  Những bức ảnh đẹp nhất về chuyến du lịch của bạn sẽ được chia
                  sẻ lên đây
                </p>
                <Link href="/order">
                  <span className={styles.btn}>Đặt ngay</span>
                </Link>
              </div>
            </div>
            <div className={styles.box}>
              <Image
                src="https://images.unsplash.com/photo-1528072164453-f4e8ef0d475a?q=80&w=3271&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={420}
                height={276}
                alt="picture"
              />
              <div className={styles.content}>
                <h3>Ảnh chụp</h3>
                <p>
                  Những bức ảnh đẹp nhất về chuyến du lịch của bạn sẽ được chia
                  sẻ lên đây
                </p>
                <Link href="/order">
                  <span className={styles.btn}>Đặt ngay</span>
                </Link>
              </div>
            </div>
            <div className={styles.box}>
              <Image
                src="https://images.unsplash.com/photo-1612953293239-4befdc359b72?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={420}
                height={276}
                alt="picture"
              />
              <div className={styles.content}>
                <h3>Ảnh chụp</h3>
                <p>
                  Những bức ảnh đẹp nhất về chuyến du lịch của bạn sẽ được chia
                  sẻ lên đây
                </p>
                <Link href="/">
                  <span className={styles.btn}>Trang chủ</span>
                </Link>
              </div>
            </div>
            <div className={styles.box}>
              <Image
                src="https://images.unsplash.com/photo-1551783841-0271a5f7c868?q=80&w=3326&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={420}
                height={276}
                alt="picture"
              />
              <div className={styles.content}>
                <h3>Ảnh chụp</h3>
                <p>
                  Những bức ảnh đẹp nhất về chuyến du lịch của bạn sẽ được chia
                  sẻ lên đây
                </p>
                <Link href="/order">
                  <span className={styles.btn}>Đặt ngay</span>
                </Link>
              </div>
            </div>
            <div className={styles.box}>
              <Image
                src="https://images.unsplash.com/photo-1530628815456-c641ebc4dda3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={420}
                height={276}
                alt="picture"
              />
              <div className={styles.content}>
                <h3>Ảnh chụp</h3>
                <p>
                  Những bức ảnh đẹp nhất về chuyến du lịch của bạn sẽ được chia
                  sẻ lên đây
                </p>
                <Link href="/order">
                  <span className={styles.btn}>Đặt ngay</span>
                </Link>
              </div>
            </div>
            <div className={styles.box}>
              <Image
                src="https://images.unsplash.com/photo-1548565494-3621affe632f?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={420}
                height={276}
                alt="picture"
              />
              <div className={styles.content}>
                <h3>Ảnh chụp</h3>
                <p>
                  Những bức ảnh đẹp nhất về chuyến du lịch của bạn sẽ được chia
                  sẻ lên đây
                </p>
                <Link href="/">
                  <span className={styles.btn}>Trang chủ</span>
                </Link>
              </div>
            </div>
            <div className={styles.box}>
              <Image
                src="https://images.unsplash.com/photo-1530439979708-7327bd7f7c1f?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={420}
                height={276}
                alt="picture"
              />
              <div className={styles.content}>
                <h3>Ảnh chụp</h3>
                <p>
                  Những bức ảnh đẹp nhất về chuyến du lịch của bạn sẽ được chia
                  sẻ lên đây
                </p>
                <Link href="/">
                  <span className={styles.btn}>Trang chủ</span>
                </Link>
              </div>
            </div>
            <div className={styles.box}>
              <Image
                src="https://images.unsplash.com/photo-1531033056439-63578c0d9f22?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={1000}
                height={276}
                layout="responsive"
                alt="picture"
              />
              <div className={styles.content}>
                <h3>Ảnh chụp</h3>
                <p>
                  Những bức ảnh đẹp nhất về chuyến du lịch của bạn sẽ được chia
                  sẻ lên đây
                </p>
                <Link href="/order">
                  <span className={styles.btn}>Đặt ngay</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className={styles.Container}>
        <section className={styles.gallery}>
          <h1 className={styles.heading}>
            <span>T</span>
            <span>O</span>
            <span>K</span>
            <span>Y</span>
            <span>O</span>
          </h1>
          <div className={styles.boxContainer}>
            <div className={styles.box}>
              <Image
                src="https://images.unsplash.com/photo-1544885935-98dd03b09034?q=80&w=3059&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={420}
                height={276}
                alt="picture"
              />
              <div className={styles.content}>
                <h3>Ảnh chụp</h3>
                <p>
                  Những bức ảnh đẹp nhất về chuyến du lịch của bạn sẽ được chia
                  sẻ lên đây
                </p>
                <Link href="/">
                  <span className={styles.btn}>Trang chủ</span>
                </Link>
              </div>
            </div>
            <div className={styles.box}>
              <Image
                src="https://images.unsplash.com/photo-1533050487297-09b450131914?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={420}
                height={276}
                alt="picture"
              />
              <div className={styles.content}>
                <h3>Ảnh chụp</h3>
                <p>
                  Những bức ảnh đẹp nhất về chuyến du lịch của bạn sẽ được chia
                  sẻ lên đây
                </p>
                <Link href="/order">
                  <span className={styles.btn}>Đặt ngay</span>
                </Link>
              </div>
            </div>
            <div className={styles.box}>
              <Image
                src="https://images.unsplash.com/photo-1493514789931-586cb221d7a7?q=80&w=3271&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={420}
                height={276}
                alt="picture"
              />
              <div className={styles.content}>
                <h3>Ảnh chụp</h3>
                <p>
                  Những bức ảnh đẹp nhất về chuyến du lịch của bạn sẽ được chia
                  sẻ lên đây
                </p>
                <Link href="/order">
                  <span className={styles.btn}>Đặt ngay</span>
                </Link>
              </div>
            </div>
            <div className={styles.box}>
              <Image
                src="https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={420}
                height={276}
                alt="picture"
              />
              <div className={styles.content}>
                <h3>Ảnh chụp</h3>
                <p>
                  Những bức ảnh đẹp nhất về chuyến du lịch của bạn sẽ được chia
                  sẻ lên đây
                </p>
                <Link href="/order">
                  <span className={styles.btn}>Đặt ngay</span>
                </Link>
              </div>
            </div>
            <div className={styles.box}>
              <Image
                src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={420}
                height={276}
                alt="picture"
              />
              <div className={styles.content}>
                <h3>Ảnh chụp</h3>
                <p>
                  Những bức ảnh đẹp nhất về chuyến du lịch của bạn sẽ được chia
                  sẻ lên đây
                </p>
                <Link href="/order">
                  <span className={styles.btn}>Đặt ngay</span>
                </Link>
              </div>
            </div>
            <div className={styles.box}>
              <Image
                src="https://images.unsplash.com/photo-1554058501-f6872d688003?q=80&w=3269&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={420}
                height={276}
                alt="picture"
              />
              <div className={styles.content}>
                <h3>Ảnh chụp</h3>
                <p>
                  Những bức ảnh đẹp nhất về chuyến du lịch của bạn sẽ được chia
                  sẻ lên đây
                </p>
                <Link href="/order">
                  <span className={styles.btn}>Đặt ngay</span>
                </Link>
              </div>
            </div>
            <div className={styles.box}>
              <Image
                src="https://images.unsplash.com/photo-1564284369929-026ba231f89b?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={420}
                height={276}
                alt="picture"
              />
              <div className={styles.content}>
                <h3>Ảnh chụp</h3>
                <p>
                  Những bức ảnh đẹp nhất về chuyến du lịch của bạn sẽ được chia
                  sẻ lên đây
                </p>
                <Link href="/order">
                  <span className={styles.btn}>Đặt ngay</span>
                </Link>
              </div>
            </div>
            <div className={styles.box}>
              <Image
                src="https://images.unsplash.com/photo-1557008525-73e7bf440f76?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={420}
                height={276}
                alt="picture"
              />
              <div className={styles.content}>
                <h3>Ảnh chụp</h3>
                <p>
                  Những bức ảnh đẹp nhất về chuyến du lịch của bạn sẽ được chia
                  sẻ lên đây
                </p>
                <Link href="/order">
                  <span className={styles.btn}>Đặt ngay</span>
                </Link>
              </div>
            </div>
            <div className={styles.box}>
              <Image
                src="https://images.unsplash.com/photo-1536183801678-ecc5eaf42bf9?q=80&w=3276&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={1000}
                height={276}
                layout="responsive"
                alt="picture"
              />
              <div className={styles.content}>
                <h3>Ảnh chụp</h3>
                <p>
                  Những bức ảnh đẹp nhất về chuyến du lịch của bạn sẽ được chia
                  sẻ lên đây
                </p>
                <Link href="/order">
                  <span className={styles.btn}>Đặt ngay</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default About;
