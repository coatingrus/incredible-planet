import React from 'react';
import _ from 'lodash';
import Carousel from 'nuka-carousel';

import { markdownify } from '../utils';
import ActionLink from './ActionLink';

export default class SectionHero extends React.Component {
  render() {
    let section = _.get(this.props, 'section');
    return (
      <section id={_.get(section, 'section_id')} className="block hero-block bg-accent outer">
        <div className="inner">
          <div className="grid">
            <Carousel
            >
              <img src="https://lh3.googleusercontent.com/4hzEMuNV_nvxMV1xd-3Zv--2HYoqURmhaxxC9FAtEAwHMaRq8Atflmwimgd3oIXoexjIh5D3MzelRL-SROPn6LCpwhRCOvHvvs_WwZ4GDSNnUKV1UA8ykhsB88qRBxnM892N6BgPCAHXh7IUoYu6pPKV0odqG43SH23008ddda5tCBLP-K3aeX31sOvuFkJdS96lRW4IKSjFsEZxO19kK5rDieof01ppsoLMO__9mDgxZMTw0u5eXpBhoy3S6x52DNLt7Ueu7mQl8JMcH-87ea3yOgZcuCaeVufj57o5TngdU9gLGTBVOozuys_Bu_CJHDbXuQnAoGV7b1sAc-Sv39-VldZEC_d1k2UfzLZ7DKx_rzO-cHA-UOvvAvSDpeGRv1a5bUo6TmDncSqZTYwjeIgrkcmwpuBi9Gu02Z1cu7DbhJrG0iq3sHT6JJgMeLgsSbER6KpvUxzeDn22S3gzsgVWHi7i3US7q1BRD-U3BcTQcHLiFMmXumRkUNaYTLAsPZDdac1UY3-A_DVUK0bH6rwA7utMqWZiCzCAtMYoBPRxdGAiSbpurK7YA09YqZnNmyT_3tZ5_JIKaEkcCEhDZIdnjz4A-kOiW48hm2qQ_f2mjHdIYZ__4tb4dFql2OLEktDqtJUDlGN6Vq-WGFdNJk5r6nOmLr_24--5zWwfU_Ww1FDIfNRVRrDuQlQ=w1030-h1378-no" alt="Rv" />
              <img src="https://lh3.googleusercontent.com/hpsxDE0FhjWamjn53ZEghEpfpQ5ewmSPk1-sMNCkPL_LX1dKmJLcKm2IVc1J3-lZWKDlxEp4K5rdHXwwBI8mNfV8RvPMPoqzgcXJOqGEuzzLOyeIpOJbzVRD1Ysyh9H_y2IZtxffvcQHBXyJHdY_g1hhc5zk_MG3Cf2YAdd3B9J0ErCefdBLQLGNzo-YAbbSXRuQyJcGep0zIMpLjLs2znbXbbTBRwOBKOUsvOGkjaGBSVIk5pTywZG5dsRyJJ7UJeoCQMyHzzW7YW9iBKY6JxHnaV4zKweOm8biQvrsurmU1Ya4hf7PL0T6_1OIc_-9LZDQ41sg6OEDbk0B-CfSRlAqxTb8ETMKzF_-Kj3UjowCeVm2UF_tdkhWLBe2Ytlyj7T8aGlJiTTSnRrf1dCY1c-ce17vunzayd7oa_lfNj7kxqJkmH3W1mbKpzfCIzJjh9q5MssTx0h4R1s3ic2BrxMw5hCLNp-Tbfgo7l9hc3nSZOKdeit9iOR-P4ttf_vUCp9X-921pRKdDssajvhmyrEvorBkksv9zyfYyHRUFqTVLGPOx9D8I77Ds5t4GwXInPj9Kae_pIqA70b62RcZ2MBDXvR3n5vQeGWKYB5L6vCkoScp6gNZfwYCaY4Xc7SvWTezR0-gkK-MJaacFEqcv6jEvGo4k8Cy0wnx7k0ccQDWkHKwQr6cOwnmuFs=w1030-h1378-no" alt="RV" />
              <img src="https://lh3.googleusercontent.com/iizSjuRHTNN0K-L7lUSGI3OaYhFZIx5kTBxS3F_VxJMlSNB2xDUzoXiFkE2Ijj0d608gf5LPzZKs07-VxHJets9pYjU5LKRHxexWDtBtu7FdOVA9_3L57n_ZhRSC6iA5dlfAFsavjDZTP6bsMAJwWNdtmvltFHGBrWR4RNN360hbtUcK7BgR1csPLviwfA8uySKXtgeXAPpuMjyq2TC8gs0FqfibSz_nnIFT5Dyi2IL_nP_AxMLgycLY93v-R_bKTUg0hZ1lGlnxy1r3BV9-pSIfHSOg49T-t_WbESzXZAqVOtJvGk0DnE5iViqSjJg6ckJP0Z6J4WcAl29e6K1JpR9hZDpNnOfYk8tdrwQzpahGS4rFJ8AdAFawQd8xfsSHIQI7YbgstcRJBf0Nhi3E22jV7-OhK8BA2FPTkT-EyraTjprobk9LzFEdtq9TBelFWYevaoNYSziIpYk0z1DbpVKuSV3NcuzEguxzApYTaVH3JDT92Gte_pWTLG_NR_mzNGmGP-QtqLCwC03MKolsdPJExzWtDw_ib7KBdkHPQNrL5ibFP7ZuJauE5qKY6110l7IrnVBKSJrwUvBuBhrfG3E4xDAloEyWOQuHo9eYEehWcnbE0Dx9mGVYpThVrJ5s8xo-Agl9YFO7x1d0rj1fFfaKhLHvJl8mhPX-xsAvRr2GwmYlE40lo8fIR_U=s1378-no" alt="RV" />
              <img src="https://lh3.googleusercontent.com/p6g3KqsxvwuN2kxIcPix6nKhr0BRL72uP78Z7LyA9rwbwRU5ND6c54RVjCWWYfl9eWV3Kl0F-53WES_OkwxvrGNLsh7FI4s2WQ7Pjc5RqRGH2ixL-58dEESJeM6pPrRGnK5RCmVVRWl53MiWQxZA2XNjsk5RPAKFGXZIdYKWwS1HznFM6E0ipHPFMIvntFKp1jy7BTNkOPXlTzXgsJc-PVsE1ex4bgxfc8MLRtNBsk5URTqk0moMPUjPMnY_67VWB84kYhyDtZtPuG15pqzJrQhcA46HVr_-FJ57_kHR9qHvycSRW3VfQ0xSPR_gJw7BvzPbRa308NRgpOwAw5w9-f5RCfonZF6j7dCDYOXoLamhTykYeFv2rdRkgfHsHlAXVuIFIOJqa8yTCPvL28KxRmSIy6-NEtPUYBxUyLQFiIlc3g6xoVkfsHXJfyJcnxLUMrCNNDo_0CxKQZXwbPwaviTuopDTPrBWuuIZoOR0G6aVEtvuBgl61NIHGMU4jnQZHRaAURzgveY4pXhtIcIA4nvX7IEZJefTfjB-TV-2UGaNFLEsNkDP-E2gNbWAaCJRh5okVh_PqYaNerd_wSsvwCvE1M5E3ZL_04PwwxQrfz-TqUQijusReAM7QcPn52AYTq7g91qaFsYX8J-mUhqBTO9VTHoa-rKr22rSYf6wqcVUGJNAjPt3Nki3omE=w958-h1280-no" alt="RV" />
              <img src="https://lh3.googleusercontent.com/l38ronDBQItZytz7Zyjq8fekJfwLIa0YCvE-mGwLpzz0707MNbAc6cjd51U5GLGbWZXRysv1-LgyQChGpKVyUbI_-TOaiyUcxqKeohjCS4QsufZx2hEl2Z8mr3jki7I_7Bm2H1hTRMVOh18BLVZka0zOcMeetu9CeCexnvpnS-xy4LTeMwtdRvpFj0FHd-Il7zUWgjOghAgtwfH3ipugwNGX53AS3hDCsazH6VO0WabluFrWhjBORcgYCHusPlaGnTknZ2GSxEhKvd333xtV55_eG4h_zjUJrvBoKasq6uVATFeKBwIe4M6MgvPmOATFzrZhHFN5UwQQ4ML2Tk-Lttq_Q9GrtZMR322D8W49ET_toG88MFPLdwBQkMQxr_ITY6UbAt8tEucK0Lir6yTc8cDEr2dL80t2fvDPUhgzASxwYi6ldc0ifFzYeS8o9FSgMpfaWFGmBxIcj9HS_jt8x48wnn1ua7g2unNR9PFjhOas5Y8eeXOOks7zznIVdbZB-w59M8QNtqxbnTK0QMQ4dTkhmFnFbm0_Uy2lZZTdl4rD88k8wMobWt-0j6SiwNJcQe4hA0VHUHXhJJ-8W6IpTOVqDFTEhnO1exyYdfxG3kcX3atuDLthvvHW4SvTnV9i-auFjwoB5aY_iGzT22Ow5yAg0za2pjJyxc_ZtaCO7qlJmNQQtsrIQHGd9Sw=w291-h218-no" alt="Rv" />
              <img src="https://lh3.googleusercontent.com/OQjnuOx8M8lvJO1cRAIFKg2W4urkY1YcyrJdu3lWvGuRuFihqXyF8h2yCgRefNjnujUN5AIoUwFz3HWQk8U249SZButifwAzOGFHY72l_hhm9Lj5AuO7dAgdazmASc_IiXIhrqAHPcg2CgUIUrabc6jjSt2TpjaenmZbCQp_4TOQGXPW5XBZ1YWP9a0ZAr78XeRaJRF8SAigF1PmtNF8ZmrHqD4Es3bZ7b99ejQ0RXhX8dXEZuxGve6jpzIg6H-gc-ddSR0Z986g03S47ZhrFmBKa6sJpYagT6Yj_Fna4lPM82UAg54Z6RNcuxyTAA7v0G1aTN9w42o0-oFxeJ3oh3YRCFJyEGHyJ2vQgEXrPbtAQeOA3MlKi7QsKLRhM5f5n17F3HSOQz94KMyM-d_sOp1lVk0BKCYvFJYvk1wH7XrEtYIez25aqXUAEu6RQvrOr0eur6kear6y1ZHNSzMNIkE3n8UQS4Jb_Uh0esB8ohBo13VJoBEROu7jbhoZgGBWRxN3MejRNcgy43gXKE0O_EaRkANEU8V3baGe7jObv6CLh6AHoebqWeWdIFjNG3O4L8nvdYNEFJoOS8QXZzRezD-WEulwYcxoiam4iOU7Mj81Qa1qIc4bg97W-FKNUwXyAHU7qzTreeOXlTLcCPdiCh1nJMnSx4CUFybLRtj2Ob1FASmmsWlrGGmWR4Q=w1708-h1280-no" alt="Rv" />
              <img src="https://lh3.googleusercontent.com/nVcSStXQjILmcnHHT91MuMEII9KRdjJkFqAiQw-VMwLKbVSG8RF8F77HLroTsdX546ApqT2uSWmJDYLBKL2-2PyTZMMrBiW4MVprsDkmbc3ZTAlNT0jN6xXc_FjG1s1aO7C5inBspbKGCf3vTrAU0z2QTh4y5CtvWDuBZR_kLH7vhDTPpQe7i5eV0oedQQlYqGIFS_wArv9tlYXH61BSFiEHGrW2IYnw0dFA3_EpdXLt3EzyRu6-L4USn84CgVt7_9r6Kl9dllDJ1KHTaYaR8Haqc7K_LKnmUQ3d8Xgnu9UQ4a9XfTe4EjxtyjMfY3TRZIDXrxdSMtBxaXa1r8AVdRME8jgRHxcY4A8VZrVf-9c85yIkT0CUmav7AjTJ8M-7Uy_xM-LH8ugVj1VeIWxarNpMNeQ3R9NOPAnCY9Q7kuncpqvjnMrvwwKWVAIeeazup5IHKjZV6h7ndCzHUGQtSTB9jvA9tXujKNxYdTxYt_14ztnNFQIG-_dUTwTTKWCQvaC7ss7U5Pujg-hDT_4WI10h9dot3d3_CSG04JurjcM5qbGDqIeC5W2kqIdHvFRVNk8CHMUSbpClQ01X6AuP3L2rkYPSMIt13gom71vlG_-VhIj87c2m6UnBUPPzqqgajt-u8EjG0UYgizjPHvD9kVy1fdNDdyPqHnD8nQeMccTLZ7F9Zj0OwvsIt5g=s1378-no" alt="RV" />
            </Carousel>
            <div className="cell block-content">
              {_.get(section, 'title') &&
                <h2 className="block-title underline">{_.get(section, 'title')}</h2>
              }
              <div className="block-copy">
                {markdownify(_.get(section, 'content'))}
              </div>
              {_.get(section, 'actions') &&
                <p className="block-buttons">
                  {_.map(_.get(section, 'actions'), (action, action_idx) => (
                    <ActionLink key={action_idx} {...this.props} action={action} class_names={'button white large'} />
                  ))}
                </p>
              }
            </div>
          </div>
        </div>
      </section>
    );
  }
}
