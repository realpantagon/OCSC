import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./Component/Navbar";

function Welcome() {
  const [isChecked, setIsChecked] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleConfirm = () => {
    setShowPopup(true);
  };

  return (
    <div className="App">
      <Navbar />
      <div className="m-[30px]">
      <div>
        <p className="text-xs m-2">
          The provisions subject to which exhibitors may participate in the OCSC
          International Education Expo (hereinafter referred to as the
          exhibition). are laid down in these Conditions of Participation and in
          the General Rules governing participation in trade fairs and
          exhibitions organised by or in co-operation with, Cityneon Displays &
          Constructions (Thailand) Co., Ltd. – (hereinafter referred to as the
          General Rules). 
        </p>
        <p className="text-xs m-2">
          CONTRACT - This application, properly executed by the
          applicant ('Exhibitor') shall, upon written acceptance by Cityneon
          ('Organiser') constitute a valid and binding contract. The Organiser
          reserves the right to render all interpretations and to establish
          further regulations as may be deemed necessary for the general success
          of the exhibition. It is further agreed that the conditions. rules and
          regulations as herein stated and as outlined in the exhibitor manual
          are made a part hereof as though fully incorporated herein, and that
          the said exhibitor agrees to be bound by each and every one thereof.
          </p>
          <p className="text-xs m-2">
          USE OF SPACE - Organiser reserves the right to decline, prohibit or
          expel an exhibit which, in its jurisdiction, is out of keeping with
          the character of the exhibition, this reservation being all inclusive
          as to the persons, items, printed matter, product, conduct, sound
          level, etc. Distribution of advertising material and exhibitor
          solicitations of any sort shall be restricted to the Exhibitor's
          booth. Exhibitor's exhibit or product may not extend beyond the limits
          of the Exhibitor's booth and part of any exhibit or product may not
          extend into any aisle. No Exhibitor shall so arrange his exhibit so as
          to obscure or prejudice adjacent Exhibitors in the opinion of
          Organiser. No Exhibitor shall assign or sublet any part of his
          assigned space without the consent of the Organiser in writing. Any
          space not occupied by the time set for completion of installation of
          displays will be reassigned at the discretion of the Organiser.
          Deposits will be forfeited unless special arrangements have been
          approved by the Organiser. Exhibitor will keep his exhibit open and
          staffed at all times during the show hours.</p>
          <p className="text-xs m-2">BOOTHS – Standard booth
          package, as ordered by Exhibitor, refers to the following items: back
          and two side walls (or one side wall in the case of corner booth, or
          no sides in the case of a peninsula booth); fascia board; table and
          chairs; two spotlights; rubbish bin; and wall to wall carpet. The
          inclusions can vary from one exhibition to another - but the Organiser
          will inform the exhibitor about this prior to signing up of the
          contract. If an exhibitor plans to install a completely constructed
          display of such character that the Exhibitor will not require or
          desire the use of the standard booth equipment, no part thereof shall
          so project as to obstruct the view of the adjacent booths. Neither
          display nor contents may exceed the height of 2500 mm, except with the
          specific permission of the Organiser. Raw wood, cardboard or similar
          material for wings to booths must be covered or painted if they are
          visible from the adjacent booth. 
          </p>
          <p className="text-xs m-2">Failure to comply with the rules and
          regulations of this contract and as stated in the exhibitor's manual
          will result in the alteration or removal of the booth at the
          exhibitor's expense. Rental fees for services and exhibit space are
          NON refundable. Exhibitors shall be bound by all pertinent laws, codes
          and regulations of the municipal or other authorities having
          jurisdiction over the exhibit facility or the conducting of said
          exhibit, together with the rules and regulations of the owners and/or
          operators of the facility in which the exhibition is held.</p>
          <p className="text-xs m-2">
          CANCELLATION AND REFUND POLICY - Exhibitors after submit the
          application form, exhibitors are responsible for the full payment of
          booking space fee.</p>
          <p className="text-xs m-2">In the event the Exhibitor cancels but has not yet
          paid the fees due, the Exhibitor is still liable for the amount due.
          It is agreed that if the Exhibitor fails to comply in any respect with
          the terms of agreement, then Organiser shall have the right without
          notice to the Exhibitor to sell or offer for sale the exhibit space
          covered by this contract. The Exhibitor will be liable for any
          deficiency, loss or damage suffered by the Organiser by reason of the
          premises stated, the loss or damage for which the Exhibitor agrees to
          pay the Organiser upon the damage together with reasonable expenses
          and costs incurred by reason thereof. It is further agreed that actual
          occupation of the exhibit space by an exhibit is of the essence
          thereof, and that should the exhibition be unable to affect the sale
          of the space as herein provided, the exhibition is then expressly
          authorised to occupy or cause said space to be occupied in such manner
          as it may deem in the best interests of the exhibition, without any
          rebate or allowance whatsoever to the Exhibitor and without in any way
          releasing said Exhibitor from any liability hereunder. Said Exhibitor
          expressly agrees to pay the exhibition the full sum as herein set
          forth.</p>
          <p className="text-xs m-2">In the event that the organiser is not able to hold the OCSC
          event due to natural disaster, acts of God, outbreak, public enemy,
          war or insurrection, strikes, the authority of law, or any cause
          beyond its control or without its fault or negligence (the “Force
          Majeure Event”), the organiser shall have no liability from any
          damages incurred to the exhibitor/sponsor/delegate as a result of the
          Force Majeure Event, except for reimbursement to be made to the
          exhibitor/ sponsor on a pro-rata basis on the registration fees and/or
          any other amount paid in, less any and all legitimate and
          administrative expenses incurred to the organiser, such as but not
          limited to rent, advertising, salaries, operating costs, etc. without
          interest.</p>
          <p className="text-xs m-2">INSURANCE - Exhibitors must carry workers compensation,
          comprehensive, general liability including products and completed
          operations, independent contractors, personal injury, and blanket
          contractual liability. It is strongly recommended that Exhibitors
          carry insurance to cover loss of or damage to their exhibits or other
          personal property while such property is located at or is in transit
          to or is in transit to or from the exhibit site. While the exhibition
          facility provides security guards, this is solely as an accommodation
          to Exhibitors, and Cityneon assumes no responsibility for any loss,
          damage or injury to any property of the Exhibitor or to any of its
          officers, clients, agents, employees or contractors, whether
          attributable to accident, fire, theft or any other cause whatsoever.
          The Exhibitor expressly agrees to save and hold harmless Cityneon,
          their management, agents and employees from any claims, liabilities
          and losses for injuries to persons (including death) or damage to
          property arising in connection with Exhibitor's use of the exhibit
          space.</p>
          <p className="text-xs m-2">AVAILABLE SERVICES - On behalf of the Exhibitors, the Organiser
          has designated the Official Exhibition Contractors to provide the
          following: drainage, cartage, furniture, booth and floor decorations,
          signs, photographs, telephone services, etc. as stated in the
          Exhibitor Manual. Services of electricians, plumbers, carpenters and
          other labor will be available and charged at the prevailing rates.
          Contractors and rates will be listed in the Exhibitor Manual to be
          issued separately. The Organiser assumes no responsibility or
          liability for any of the services performed or materials delivered by
          the foregoing persons, parties and organisations. Arrangements for
          these services and payments are to be made between Exhibitors and
          Official Exhibition Contractors directly.</p>
          <p className="text-xs m-2">PROTECTION OF FACILITIES -
          Nothing shall be posted on, or tacked, nailed, screwed. or otherwise
          attached to the columns, walls, floors or other parts of the
          convention hall exhibit area without permission from the proper
          building authority. Packing, unpacking and assembly of exhibits shall
          be done only in designated areas and in conformity with directions of
          the Organiser, the convention hall manager or their assistants.
          </p>
          <p className="text-xs m-2">INSTALLATION & DISMANTLING - The specific requirements as to the time
          for installation and dismantling of exhibits shall be as set forth in
          the Exhibitor Manual supplied to each Exhibitor for this particular
          Exhibition. Such requirements shall be binding upon the Exhibitor as
          set forth.The Exhibition Manual will be sent to Exhibitors by early
          of july.
        </p>
        </div>
      <div className="text-base mt-3 ml-2">
        <input
          type="checkbox"
          id="terms-checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="terms-checkbox" className="ml-2">
          I agree to terms & conditions.
        </label>
      </div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
        onClick={handleConfirm}
        disabled={!isChecked}
      >
        Confirm
      </button>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded p-6">
            <h2 className="text-xl font-bold mb-4">Confirmation</h2>
            <p>You have agreed to the terms and conditions.</p>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
              onClick={() => setShowPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
    </div>
  );
}

export default Welcome;