// "use client";
import Image from "next/image";
import styles from "./endown.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faStar,
  faStarHalf,
  faBed,
  faUtensils,
  faBullhorn,
  faEarthAsia,
  faPlane,
  faHiking,
} from "@fortawesome/free-solid-svg-icons";

const Endow = () => {
  return (
    <>
      <section className={styles.book}>
        <h1 className={styles.heading}>
          <span>T</span>
          <span>Ì</span>
          <span>M</span>
          <span className={styles.space}></span>
          <span>Ư</span>
          <span>U</span>
          <span className={styles.space}></span>
          <span>Đ</span>
          <span>Ã</span>
          <span>I</span>
        </h1>
        <div className={styles.row}>
          <div className={styles.image}>
            <Image
              src="https://code-fullstack-exercise49.vercel.app/images/book-img.svg"
              alt="picture"
              width={600}
              height={800}
              layout="responsive"
              className={styles.img}
            />
          </div>
          <form>
            <div className={styles.inputBox}>
              <h3>Hãy liên hệ với tôi bằng :</h3>
              <input type="text" placeholder="Email hoặc số điện thoại" />
            </div>
            <div className={styles.inputBox}>
              <h3>Tôi muốn đến: </h3>
              <input type="text" placeholder="Địa điểm chính xác" />
            </div>
            <div className={styles.inputBox}>
              <h3>Chúng tôi có :</h3>
              <input type="number" placeholder="Số người" />
            </div>
            <div className={styles.inputBox}>
              <h3>bắt đầu từ :</h3>
              <input type="date" />
            </div>
            <div className={styles.inputBox}>
              <h3>Kết thúc vào :</h3>
              <input type="date" />
            </div>
            <input
              type="submit"
              className={styles.btn}
              value="Tìm Ngay"
            ></input>
          </form>
        </div>
      </section>
      <section className={styles.packages}>
        <h1 className={styles.headingForYou}>
          <span>C</span>
          <span>H</span>
          <span>O</span>
          <span className={styles.spaceForYour}></span>
          <span>B</span>
          <span>Ạ</span>
          <span>N</span>
        </h1>
        <div className={styles.boxContainer}>
          <div className={styles.boxForYou}>
            <Image
              src="https://images.unsplash.com/photo-1527489377706-5bf97e608852?q=80&w=2159&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={1000}
              height={25}
              layout="responsive"
              alt="pic"
            />
            <div className={styles.contentForYou}>
              <div className={styles.address}>
                <span>
                  <FontAwesomeIcon icon={faLocationDot} />
                </span>
                <h3>Hawaii</h3>
              </div>
              <p className={styles.countryContent}>
                Hòn ngọc của thái bình dương
              </p>
              <p className={styles.countryContent}>
                Ưu đãi 50.000.000 cho 5 người / 7 ngày
              </p>
              <div className={styles.starts}>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarHalf} />
              </div>
              <a href="hawaii/index.html" className={styles.btnForYou}>
                Đặt ngay
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.endow}>
        <h1 className={styles.heading}>
          <span>Ư</span>
          <span>U</span>
          <span className={styles.space}></span>
          <span>Đ</span>
          <span>Ã</span>
          <span>I</span>
        </h1>
        <div className={styles.container}>
          <div className={styles.box}>
            <Image
              src="https://images.unsplash.com/photo-1470770903676-69b98201ea1c?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={580}
              height={450}
              alt="picture"
            />
            <div className={styles.content}>
              <div className={styles.contentTitle}>
                <FontAwesomeIcon icon={faLocationDot} className={styles.icon} />
                <h3>Mumbai</h3>
              </div>
              <p>Mumbai-Thành phố của nơi giao thoa giữa quá khứ-hiện tại</p>
              <p>chuyến đi dành cho gia đình 3N/2Đ</p>
              <div className={styles.starts}>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarHalf} />
              </div>
              <div className={styles.prices}>
                30.000.000 <span>52.845.245</span>
              </div>
              <a href="mumbai/index.html" className={styles.btn}>
                Đặt ngay
              </a>
            </div>
          </div>
          <div className={styles.box}>
            <Image
              src="https://images.unsplash.com/photo-1486912500284-6f2462ba07ea?q=80&w=2085&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={580}
              height={450}
              alt="picture"
            />
            <div className={styles.content}>
              <div className={styles.contentTitle}>
                <FontAwesomeIcon icon={faLocationDot} className={styles.icon} />
                <h3>Mumbai</h3>
              </div>
              <p>Mumbai-Thành phố của nơi giao thoa giữa quá khứ-hiện tại</p>
              <p>chuyến đi dành cho gia đình 3N/2Đ</p>
              <div className={styles.starts}>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarHalf} />
              </div>
              <div className={styles.prices}>
                30.000.000 <span>52.845.245</span>
              </div>
              <a href="mumbai/index.html" className={styles.btn}>
                Đặt ngay
              </a>
            </div>
          </div>
          <div className={styles.box}>
            <Image
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={580}
              height={450}
              alt="picture"
            />
            <div className={styles.content}>
              <div className={styles.contentTitle}>
                <FontAwesomeIcon icon={faLocationDot} className={styles.icon} />
                <h3>Mumbai</h3>
              </div>
              <p>Mumbai-Thành phố của nơi giao thoa giữa quá khứ-hiện tại</p>
              <p>chuyến đi dành cho gia đình 3N/2Đ</p>
              <div className={styles.starts}>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarHalf} />
              </div>
              <div className={styles.prices}>
                30.000.000 <span>52.845.245</span>
              </div>
              <a href="mumbai/index.html" className={styles.btn}>
                Đặt ngay
              </a>
            </div>
          </div>
          <div className={styles.box}>
            <Image
              src="https://images.unsplash.com/photo-1520637102912-2df6bb2aec6d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={580}
              height={450}
              alt="picture"
            />
            <div className={styles.content}>
              <div className={styles.contentTitle}>
                <FontAwesomeIcon icon={faLocationDot} className={styles.icon} />
                <h3>Mumbai</h3>
              </div>
              <p>Mumbai-Thành phố của nơi giao thoa giữa quá khứ-hiện tại</p>
              <p>chuyến đi dành cho gia đình 3N/2Đ</p>
              <div className={styles.starts}>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarHalf} />
              </div>
              <div className={styles.prices}>
                30.000.000 <span>52.845.245</span>
              </div>
              <a href="mumbai/index.html" className={styles.btn}>
                Đặt ngay
              </a>
            </div>
          </div>
          <div className={styles.box}>
            <Image
              src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={1196}
              height={450}
              alt="picture"
            />
            <div className={styles.content}>
              <div className={styles.contentTitle}>
                <FontAwesomeIcon icon={faLocationDot} className={styles.icon} />
                <h3>Mumbai</h3>
              </div>
              <p>Mumbai-Thành phố của nơi giao thoa giữa quá khứ-hiện tại</p>
              <p>chuyến đi dành cho gia đình 3N/2Đ</p>
              <div className={styles.starts}>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarHalf} />
              </div>
              <div className={styles.prices}>
                30.000.000 <span>52.845.245</span>
              </div>
              <a href="mumbai/index.html" className={styles.btn}>
                Đặt ngay
              </a>
            </div>
          </div>
          <div className={styles.box}>
            <Image
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={1196}
              height={450}
              alt="picture"
            />
            <div className={styles.content}>
              <div className={styles.contentTitle}>
                <FontAwesomeIcon icon={faLocationDot} className={styles.icon} />
                <h3>Mumbai</h3>
              </div>
              <p>Mumbai-Thành phố của nơi giao thoa giữa quá khứ-hiện tại</p>
              <p>chuyến đi dành cho gia đình 3N/2Đ</p>
              <div className={styles.starts}>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarHalf} />
              </div>
              <div className={styles.prices}>
                30.000.000 <span>52.845.245</span>
              </div>
              <a href="mumbai/index.html" className={styles.btn}>
                Đặt ngay
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.services}>
        <h1 className={styles.heading}>
          <span>D</span>
          <span>Ị</span>
          <span>C</span>
          <span>H</span>
          <span className={styles.spaces}></span>
          <span>V</span>
          <span>Ụ</span>
        </h1>
        <div className={styles.boxContainer}>
          <div className={styles.box}>
            <FontAwesomeIcon icon={faBed} className={styles.icons} />
            <h3>Nghỉ Dưỡng Cao Cấp</h3>
            <p>Some text....</p>
          </div>
          <div className={styles.box}>
            <FontAwesomeIcon icon={faUtensils} className={styles.icons} />
            <h3>Dịch Vụ Ăn Uống</h3>
            <p>Some text....</p>
          </div>
          <div className={styles.box}>
            <FontAwesomeIcon icon={faBullhorn} className={styles.icons} />
            <h3>Chính Sách An Toàn</h3>
            <p>Some text....</p>
          </div>
          <div className={styles.box}>
            <FontAwesomeIcon icon={faEarthAsia} className={styles.icons} />
            <h3>Rộng Khắp Thế Giới</h3>
            <p>Some text....</p>
          </div>
          <div className={styles.box}>
            <FontAwesomeIcon icon={faPlane} className={styles.icons} />
            <h3>Tốc Độ Cao</h3>
            <p>Some text....</p>
          </div>
          <div className={styles.box}>
            <FontAwesomeIcon icon={faHiking} className={styles.icons} />
            <h3>Những Cuộc Phiêu Lưu</h3>
            <p>Some text....</p>
          </div>
        </div>
      </section>
      <section className={styles.gallery}>
        <h1 className={styles.heading}>
          <span>T</span>
          <span>H</span>
          <span>Ư</span>
          <span className={styles.space}></span>
          <span>V</span>
          <span>I</span>
          <span>Ệ</span>
          <span>N</span>
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
                Những bức ảnh đẹp nhất về chuyến du lịch của bạn sẽ được chia sẻ
                lên đây
              </p>
              <Link href="/about">
                <span className={styles.btn}>Xem Thêm</span>
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
                Những bức ảnh đẹp nhất về chuyến du lịch của bạn sẽ được chia sẻ
                lên đây
              </p>
              <Link href="/about">
                <span className={styles.btn}>Xem Thêm</span>
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
                Những bức ảnh đẹp nhất về chuyến du lịch của bạn sẽ được chia sẻ
                lên đây
              </p>
              <Link href="/about">
                <span className={styles.btn}>Xem Thêm</span>
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
                Những bức ảnh đẹp nhất về chuyến du lịch của bạn sẽ được chia sẻ
                lên đây
              </p>
              <Link href="/about">
                <span className={styles.btn}>Xem Thêm</span>
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
                Những bức ảnh đẹp nhất về chuyến du lịch của bạn sẽ được chia sẻ
                lên đây
              </p>
              <Link href="/about">
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
                Những bức ảnh đẹp nhất về chuyến du lịch của bạn sẽ được chia sẻ
                lên đây
              </p>
              <Link href="/about">
                <span className={styles.btn}>Xem Thêm</span>
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
                Những bức ảnh đẹp nhất về chuyến du lịch của bạn sẽ được chia sẻ
                lên đây
              </p>
              <Link href="/about">
                <span className={styles.btn}>Xem Thêm</span>
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
                Những bức ảnh đẹp nhất về chuyến du lịch của bạn sẽ được chia sẻ
                lên đây
              </p>
              <Link href="/about">
                <span className={styles.btn}>Xem Thêm</span>
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
                Những bức ảnh đẹp nhất về chuyến du lịch của bạn sẽ được chia sẻ
                lên đây
              </p>
              <Link href="/about">
                <span className={styles.btn}>Xem Thêm</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.review}>
        <h1 className={styles.heading}>
          <span>Đ</span>
          <span>Á</span>
          <span>N</span>
          <span>H</span>
          <span className={styles.space}></span>
          <span>G</span>
          <span>I</span>
          <span>Á</span>
        </h1>
        <div className={styles.rate}>
          <div className={styles.row}>
            <div className={styles.ratestar}>
              <h2>Đánh Giá Chuyến Đi Của Bạn</h2>
              <div className={styles.skills}>
                <div className={styles.rating}>
                  <FontAwesomeIcon icon={faStarHalf} className={styles.icon} />
                  <FontAwesomeIcon icon={faStar} className={styles.icon} />
                  <FontAwesomeIcon icon={faStar} className={styles.icon} />
                  <FontAwesomeIcon icon={faStar} className={styles.icon} />
                  <FontAwesomeIcon icon={faStar} className={styles.icon} />
                </div>
              </div>
            </div>
            <form>
              <div className={styles.inputBox}>
                <textarea
                  placeholder="viết đánh giá của bạn"
                  name="rate"
                  cols="120"
                  rows="15"
                  style={{ resize: "none" }}
                ></textarea>
              </div>
              <input
                type="submit"
                value="Gửi Tới Chúng Tôi"
                className={styles.btn}
              ></input>
            </form>
          </div>
        </div>
        <div className={styles.profile}>
          <div className={styles.profileDetails}>
            <div className={styles.profileContent}>
              <div className={styles.box}>
                <Image
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  width={156}
                  height={156}
                  alt="img"
                  style={{ borderRadius: "50%" }}
                />
                <h3>Some people</h3>
                <p>Some text....</p>
                <div className={styles.starts}>
                  <FontAwesomeIcon icon={faStar} className={styles.icons} />
                  <FontAwesomeIcon icon={faStar} className={styles.icons} />
                  <FontAwesomeIcon icon={faStar} className={styles.icons} />
                  <FontAwesomeIcon icon={faStar} className={styles.icons} />
                  <FontAwesomeIcon icon={faStar} className={styles.icons} />
                </div>
              </div>
            </div>
            <div className={styles.profileContent}>
              <div className={styles.box}>
                <Image
                  src="https://images.unsplash.com/photo-1474176857210-7287d38d27c6?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  width={156}
                  height={156}
                  alt="img"
                  style={{ borderRadius: "50%" }}
                />
                <h3>Some people</h3>
                <p>Some text....</p>
                <div className={styles.starts}>
                  <FontAwesomeIcon icon={faStar} className={styles.icons} />
                  <FontAwesomeIcon icon={faStar} className={styles.icons} />
                  <FontAwesomeIcon icon={faStar} className={styles.icons} />
                  <FontAwesomeIcon icon={faStar} className={styles.icons} />
                  <FontAwesomeIcon icon={faStar} className={styles.icons} />
                </div>
              </div>
            </div>
            <div className={styles.profileContent}>
              <div className={styles.box}>
                <Image
                  src="https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  width={156}
                  height={156}
                  alt="img"
                  style={{ borderRadius: "50%" }}
                />
                <h3>Some people</h3>
                <p>Some text....</p>
                <div className={styles.starts}>
                  <FontAwesomeIcon icon={faStar} className={styles.icons} />
                  <FontAwesomeIcon icon={faStar} className={styles.icons} />
                  <FontAwesomeIcon icon={faStar} className={styles.icons} />
                  <FontAwesomeIcon icon={faStar} className={styles.icons} />
                  <FontAwesomeIcon icon={faStar} className={styles.icons} />
                </div>
              </div>
            </div>
            <div className={styles.profileContent}>
              <div className={styles.box}>
                <Image
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  width={156}
                  height={156}
                  alt="img"
                  style={{ borderRadius: "50%" }}
                />
                <h3>Some people</h3>
                <p>Some text....</p>
                <div className={styles.starts}>
                  <FontAwesomeIcon icon={faStar} className={styles.icons} />
                  <FontAwesomeIcon icon={faStar} className={styles.icons} />
                  <FontAwesomeIcon icon={faStar} className={styles.icons} />
                  <FontAwesomeIcon icon={faStar} className={styles.icons} />
                  <FontAwesomeIcon icon={faStar} className={styles.icons} />
                </div>
              </div>
            </div>
            <div className={styles.profileContent}>
              <div className={styles.box}>
                <Image
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  width={156}
                  height={156}
                  alt="img"
                  style={{ borderRadius: "50%" }}
                />
                <h3>Some people</h3>
                <p>Some text....</p>
                <div className={styles.starts}>
                  <FontAwesomeIcon icon={faStar} className={styles.icons} />
                  <FontAwesomeIcon icon={faStar} className={styles.icons} />
                  <FontAwesomeIcon icon={faStar} className={styles.icons} />
                  <FontAwesomeIcon icon={faStar} className={styles.icons} />
                  <FontAwesomeIcon icon={faStar} className={styles.icons} />
                </div>
              </div>
            </div>
            <div className={styles.profileContent}>
              <div className={styles.box}>
                <Image
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1661&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  width={156}
                  height={156}
                  alt="img"
                  style={{ borderRadius: "50%" }}
                />
                <h3>Some people</h3>
                <p>Some text....</p>
                <div className={styles.starts}>
                  <FontAwesomeIcon icon={faStar} className={styles.icons} />
                  <FontAwesomeIcon icon={faStar} className={styles.icons} />
                  <FontAwesomeIcon icon={faStar} className={styles.icons} />
                  <FontAwesomeIcon icon={faStar} className={styles.icons} />
                  <FontAwesomeIcon icon={faStar} className={styles.icons} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.contact}>
        <h1 className={styles.heading}>
          <span>L</span>
          <span>I</span>
          <span>Ê</span>
          <span>N</span>
          <span className={styles.spaces}></span>
          <span>H</span>
          <span>Ệ</span>
        </h1>
        <div className={styles.row}>
          <div className={styles.image}>
            <iframe
              width="100%"
              height="350vh"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.4064000497674!2d105.78126121547308!3d20.976340386026827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135acd2d89877d7%3A0xe55435164e9b4695!2zMTk3IFRy4bqnbiBQaMO6LCBQLiBWxINuIFF1w6FuLCBIw6AgxJDDtG5nLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1650976801748!5m2!1svi!2s"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <form className={styles.actions}>
            <div className={styles.inputBox}>
              <input type="text" placeholder="Tên của bạn" />
              <input type="email" placeholder="Email liên hệ" />
            </div>
            <div className={styles.inputBox}>
              <input type="number" placeholder="Số điện thoại" />
              <input type="text" placeholder="Chủ đề" />
            </div>
            <textarea
              placeholder="Viết lời nhắn của bạn"
              cols="30"
              rows="10"
              className={styles.textarea}
            ></textarea>
            <input
              type="submit"
              className={styles.btn}
              name="send"
              value="Gửi tới chúng tôi"
            ></input>
          </form>
        </div>
      </section>
    </>
  );
};

export default Endow;
