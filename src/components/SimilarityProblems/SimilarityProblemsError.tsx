import useWorksheetBuilderContext from "../../hooks/useWorksheetBuilderContext";
import SimpleError from "../common/SimpleError";

export default function SimilarityProblemsError() {
  const {getSimilarityProblemsAction, selectedProblemId} = useWorksheetBuilderContext()

  const handleRetry = () => {
    if (selectedProblemId) {
      getSimilarityProblemsAction(selectedProblemId)
    }
  }

  return (
    <SimpleError
      title="유사 문제를 불러올 수 없습니다"
      message="네트워크 연결을 확인하고 다시 시도해 주세요."
      onRetry={handleRetry}
      retryText="다시 시도"
    />
  )
}