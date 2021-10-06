import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const TryOutPage = () => (
  <Layout>
    <Seo title="Try Out" />
    <h3>TryOut</h3>
    <p>Kami mengadakan Try Out Secara berkala pada akhir pekan</p>
    <p>Kami menjamin Try Out kami sesuai dengan standar dan aturan KSN</p>
    <h3>Cara Mendaftar</h3>
    <p>
      Untuk mengikuti Try Out, peserta dikanai biaya Rp 5000/sekali try out.
    </p>
    <p>
      Peserta dapat membayar Rp 10.000, 15.000, 20.000, dst sekaligus, sehingga
      mendapatkan kesempatan mengikuti tryout sebanyak 2x, 3x, 4x, dst
    </p>
    <p>Peserta dapat memilih sendiri TryOut mana yang akan diikuti</p>
    <p>
      Peserta yang belum pernah mengikuti TryOut silakan mendaftar melalui link
      ini
    </p>
    <p>
      Peserta yang sudah pernah mengikuti tryout namun kesempatannya sudah habis
      dan ingin mengikuti tryout lagi, cukup membayar biaya tryout lalu
      konfirmasi ke nomor Admin Grup
    </p>
    <h3>Fasilitas</h3>
    <p>
      Peserta yang mengikuti TryOut akan mendapatkan nilai dan pembahasan soal
      TryOut tersebut
    </p>
    <p>
      Peserta yang mengikuti TryOut mendapat kesempatan berkomunikasi dan
      berkonsultasi langsung dengan penyusun soal
    </p>

    <h3>Jadwal TryOut</h3>
    <table id="customers">
      <tr>
        <th>Try Out</th>
        <th>Level</th>
        <th>Waktu</th>
      </tr>
      <tr>
        <td>KSN-1</td>
        <td>KSN (Nasional)</td>
        <td>Sabtu, 23 Oktober 2021</td>
      </tr>
      <tr>
        <td>KSN-2</td>
        <td>KSN (Nasional)</td>
        <td>Sabtu, 30 Oktober 2021</td>
      </tr>
      <tr>
        <td>KSN-3</td>
        <td>KSN (Nasional)</td>
        <td>Sabtu, 6 November 2021</td>
      </tr>
    </table>
    <h4>Ada pertanyaan?</h4>
    <p>
      galih.p.w.j@gmail.com <br />
      0858.7765.7708
    </p>
  </Layout>
)

export default TryOutPage